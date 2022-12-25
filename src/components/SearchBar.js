import { useEffect, useState } from "react"
import products from "../store/products"
import './pages/MainPage/MainPage.css'

const SearchBar = () => {
    const [searchValue,setSearchValue] = useState('')

    useEffect(() => {
        const filtered = products.products.filter((product) => product.title.includes(searchValue))
        console.log(filtered)
    }, [searchValue])

    return(
        <>
            <input onChange={(e) => setSearchValue(e.target.value.toLowerCase())} className='header_search_bar' placeholder="Search"/>
            {/* {searchValue} */}
        </>
    )
    
}
export default SearchBar