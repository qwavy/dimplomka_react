import login_img from '../../images/vector.png'
import search_bar_photo from '../../images/search_bar_photo.png'
import photo from '../../images/photo.png'
import design from '../../images/design.png'
import './MainPage.css'
import products from '../../store/products'
import { useState, useEffect } from 'react'
// import smart_watch from '../images/products/smart-watch.png'

// import login_img from '..../store'
// import { useEffect } from 'react';
// products

const MainPage = () => {

    const [dealsForTechnique, setDealsForTechnique] = useState([])
    const [hotDeals, setHotDeals] = useState([])
    const [dealsFurniture,setDealsFurniture] = useState([])
    useEffect(() => {
        const filteredTechnique = products.products.filter((product) => product.category.includes("technique"))
        const filteredTechniqueDeals = filteredTechnique.filter((product) => product.discount > 0)
        setDealsForTechnique(filteredTechniqueDeals)

        const filteredHotDeals = products.products.filter((product) => product.discount > 40)
        setHotDeals(filteredHotDeals)

        const filteredDealsFurniture = products.products.filter((product) => product.category.includes("furniture"))
        setDealsFurniture(filteredDealsFurniture)
    }, [])

    return (
        <div className="container">

            <div className="header">
                <div className='logo'>
                    <p>shopCart</p>
                </div>
                <div className='header_login'>
                    <div className='header_login_photo'>
                        <div>
                            <img src={login_img} alt='photo_image' />
                        </div>
                    </div>
                    <div className='header_login_name'>
                        <p>Sign In</p>
                    </div>
                </div>
            </div>
            {/* <div className='line'></div> */}
            <hr className='line' />


            <div className='header_search'>
                <div className='header_search_location'>
                    <p>Astana⠀010000</p>
                </div>
                <div className='header_search_bar'>
                    <p>Search</p>
                    <img src={search_bar_photo} />
                </div>
            </div>
            <div className='content'>
                <h1>
                    We picked some <span className='content_p'>cool things</span> for you!
                </h1>
                <div className='content_deals'>
                    <h1>deals for technique</h1>
                    <hr />
                    <div className='content_deals_container'>
                        {dealsForTechnique.map((product) => <div className='product_card' key={product.id}>
                            <img src={product.image} />
                            <p>{product.title}</p>
                            <div className='price_info'>
                                <p>{product.price}$</p>
                                <p className='discount'>-{product.discount}% off</p>
                            </div>
                        </div>)}
                    </div>

                </div>
            </div>
            <img src={photo} className="photo" />
            <div className='hot_deals'>
                <h1>hot deals</h1>
                <hr />
                <div className='products_container'>
                    {hotDeals.map((product) => <div className='hot_deals_product_card' key={product.id}>
                        <img src={product.image} />
                        <p>{product.title}</p>
                        <div className='price_info'>
                            <p>{product.price}$</p>
                            <p className='discount'>-{product.discount}% off</p>
                        </div>
                    </div>)}
                </div>
            </div>
            {/* <div className='furniture_img'>
                <h1>Furniture</h1>
            </div> */}
            <div className='furniture'>
                <h1>more furniture</h1>
                <hr/>
                <div className='products_container'>
                    {dealsFurniture.map((product) => <div className='hot_deals_product_card' key={product.id}>
                        <img src={product.image}/>
                        <p>{product.title}</p>
                        <div className='price_info'>
                            <p>{product.price}$</p>
                            <p className='discount'>-{product.discount}% off</p>
                        </div>
                    </div>)}
                </div>
            </div>
            <div className='footer'>
                <p className='logo'>shopCart</p>
            </div>
        </div>
    )
}
export default MainPage