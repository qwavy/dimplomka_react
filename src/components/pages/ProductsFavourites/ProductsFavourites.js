import { observer } from "mobx-react-lite"
import products from "../../../store/products"

const ProductsFavourites = () => {
    return (
        <div>
            {products.products_favourites.map((product) => <div key={product.id}>
                <img src={product.image} />
                <p>{product.title}</p>
                <div className='price_info'>
                    <p>{product.price}$</p>
                    <p className='discount'>-{product.discount}% off</p>
                </div>
            </div>)}
        </div>
    )
}
export default observer(ProductsFavourites)