import { useState } from "react"
import products from "../store/products"

const Slider = (dealsForTechnique) => {
    const [currentSlide,setCurrentSlide] = useState([products.products[0]])
    // console.log(currentSlide)
    return(
        <div>
            {currentSlide.map((product) => <div>

                {product.title}
            </div>)}
        </div>
    )
}
export default Slider