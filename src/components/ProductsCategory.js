import { observer } from "mobx-react-lite"
import { useState } from "react"
import products from "../store/products"

const ProductsCategory = ({setProductsList}) => {
    const filterCategory = (filterCategory) => {
        const filtered = products.products.filter((product) => product.category.includes(filterCategory))
        setProductsList(filtered)
    }
    const sortByPrice = () => {
        // console.log(filteredList)
        // const sorted = filteredList.sort((a, b) => a.price - b.price)
        const sorted = products.products.sort((a, b) => a.price - b.price)

        // setProductsList(sorted)
        // const sorted = console.log(products.products)
    }
    const sortByPriceLow = () => {
        const sorted = products.products.sort((a, b) => b.price - a.price)
        setProductsList(sorted)

    }
    const sortByRating = () => {
        const sorted = products.products.sort((a, b) => b.rating.rate - a.rating.rate)
        setProductsList(sorted)


    }
    return (
        <div>
            <button onClick={() => filterCategory("men's clothing")}>mens clothing</button>
            <button onClick={() => filterCategory("women's clothing")}>womens clothing</button>
            <button onClick={() => filterCategory("electronics")}>electronics</button>
            <button onClick={() => filterCategory("jewelery")}>jewelery</button>
            {/* searchByPrice */}
            <button onClick={sortByPrice}>sort</button>
            <button onClick={sortByPriceLow}>sortLow</button>
            <button onClick={sortByRating}>rating</button>
            {/* {filtered.map((product) => <div key={products.id}>
                {product.title}
            </div>)} */}
        </div>
    )
}
export default observer(ProductsCategory)
