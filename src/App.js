import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import Cart from "./components/Cart"
import CartButton from "./components/CartButton"
import MainPage from "./components/pages/MainPage"
import ProductInfo from "./components/ProductInfo"
import ProductsCategory from "./components/ProductsCategory"
import SearchBar from "./components/SearchBar"
import products from "./store/products"

const App = () => {
  const [productsList,setProductsList] = useState([])

  // products.check()
  // useEffect(() => {
  //   // products.getProducts()
  //   // setProductsList(products.products)
  //   // console.log(productsList)
  //   fetch('https://fakestoreapi.com/products')
  //   .then(res=>res.json())
  //   .then(json=>products.products = (json))
  //   setProductsList(products.products)
  // }, [])
  useEffect(() => {
    setProductsList(products.products)
  },[products.products])
  const setProductsListFunc = (array) => {
    setProductsList(array)
  }
  const test = () => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json => products.getProducts(json))
  }

  return (
    <div className='container'>
      <MainPage/>
      {/* <SearchBar setProductsList={setProductsListFunc}/>
      <ProductsCategory setProductsList={setProductsListFunc}/>
      <Cart />
      
      <button onClick={test}>test</button>
      {productsList.map((product) => <div key={product.id} className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={product.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.price}$</p>
          <ProductInfo product={product}/>
          <CartButton product={product} />
          {product.rating.rate}★
        </div>
      </div>)} */}

      {/* <amazonProducts.map((productt)) */}

    </div>
  )
}
export default observer(App)
