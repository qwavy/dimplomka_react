import products from "../../../store/products"
import { useState } from 'react';
import './ProductInfo.css'
import { observer } from "mobx-react-lite"
import { useEffect } from 'react';


import favourites from '../../../images/favourites.png'

const ProductInfo = ({ id, active, setActive }) => {

    const [currentProduct, setCurrentProduct] = useState([products.products[0]])

    useEffect(() => {
        setCurrentProduct([products.products[id - 1]])
    }, [id])

    const addToCart = (id) => {
        products.products_cart.push(products.products[id - 1])
    }

    const addToFavourites = (id) => {
        products.products_favourites.push(products.products[id - 1])
    }

    return (
        <div  onClick={() => setActive(false)}>

        <div className="container">
            <div className={active ? 'container_modal active' : 'container_modal'} >
                <div onClick={e => e.stopPropagation()} className="modal_container">
                    {currentProduct.map((product) => <div className="product_info_card">
                        <img src={product.image} className="product_info_image" />
                        <div className="product_info_container">
                            <p className="product_info_title">{product.title}</p>
                            <p className="product_info_category">{product.category}</p>
                            <hr className="product_info_line" />
                            <p className="prodcut_info_description">{product.description}</p>
                            <div className="price_info">
                                <p className="product_info_price">{product.price}$</p>
                                <p className='discount'>-{product.discount}% off</p>

                            </div>
                            <div className="product_info_buttons">

                                <button className="product_info_button_favourites" onClick={() => addToFavourites(product.id)}>Add to favourites</button>

                                <button className="product_info_button_cart" onClick={() => addToCart(product.id)}>Add to cart</button>
                            </div>
                        </div>


                    </div>)}
                </div>
            </div>



        </div>
        </div>

    )
}
export default observer(ProductInfo)