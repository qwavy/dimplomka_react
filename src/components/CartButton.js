import { useEffect } from "react"
import products from "../store/products"

const CartButton = ({product}) => {

    useEffect(() => {
        for(let i = 0;i < products.cart_info.length;i++){
            for(let j = 0;j < products.cart_info.length;j++){
                if(products.cart_info[j].id === products.cart_info[i].id){
                    console.log('odinakovoe')
                }
            }

        }
    }, [products.cart_info])
    const buyToCart = (product) => {
        products.cart_info.push(product)
        if(product.cart_info = 0){
            return
        }else{
            for(let i = 0; i < products.cart_info.length;i++){
                products.cart_all_price += products.cart_info[i].price   
            }
        }
    }
    return(
        <>
            <button onClick={() => buyToCart(product)} className="btn btn-primary">Buy</button>
        </>

    )
}

export default CartButton