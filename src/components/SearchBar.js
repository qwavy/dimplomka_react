import { useEffect, useState } from "react"
import products from "../store/products"

const SearchBar = ({setProductsList}) => {
    const [searchValue,setSearchValue] = useState('')

    useEffect(() => {
        const filtered = products.products.filter((product) => product.title.includes(searchValue))
        setProductsList(filtered)


    }, [searchValue])

    return(
        <>
            <input onChange={(e) => setSearchValue(e.target.value.toLowerCase())}/>
            {searchValue}
        </>
    )
    
}
export default SearchBar