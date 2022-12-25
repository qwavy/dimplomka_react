import { observer } from "mobx-react-lite"
import { Routes, Route, Link } from 'react-router-dom'

import MainPage from "./components/pages/MainPage/MainPage"
import ProductInfo from "./components/pages/ProductInfo/ProductInfo"
import ProductsFavourites from "./components/pages/ProductsFavourites/ProductsFavourites"
import Register from "./components/pages/DataUsers/Register"
import Login from "./components/pages/DataUsers/Login"
// import Register from "./components/pages/DataUsers/Register"
import { useEffect, useState } from "react"
import products from "./store/products"
import firebase from "./firebase"
// import Cart from "./components/Cart"
// import CartButton from "./components/CartButton"
// import ProductInfo from "./components/ProductInfo"
// import ProductsCategory from "./components/ProductsCategory"
// import SearchBar from "./components/SearchBar"
// import products from "./store/products"

// import Login from "./components/pages/Data/Login";

// import Login from './components/pages/DataUsers/SignIn/Login';



const App = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
      console.log(user)
    })
  }, [])


  return (
    <div className='container'>


      {user ? <><Link to="/Home">Home</Link>



        <div>

          <Link to="/ProductInfo">ProductPage</Link>

        </div>
        <div>
          <Link to="/Favourites">Favourites</Link>

        </div>
        <div>
          <Link to="/Register">Register</Link>
        </div>
        <div>
          <Link to='/Login'>Login</Link>
        </div>


        <div>
          <Routes>
            <Route path="/Home" element={<MainPage userData={user}/>} />
            <Route path="/ProductInfo" element={<ProductInfo />} />
            <Route path="/Favourites" element={<ProductsFavourites />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </>
        : <Register />}
    </div>
  )
}
export default observer(App)
