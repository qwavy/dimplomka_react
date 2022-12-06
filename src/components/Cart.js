import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import products from "../store/products"
const Cart = () => {




    return (
        <>
            <a href="#myModal" className="btn btn-lg btn-primary" data-bs-toggle="modal">Cart</a>

            <div id="myModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Cart</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <h5>Cart </h5>
                            {products.cart_info === 0  ? (<p>cart is empty add products</p>) : true}
                            {products.cart_info.map((cart) => <div key={cart.id}>
                                {cart.title} {cart.price}$<button>x</button>
                            </div>)}


                        </div>
                        <div className="modal-footer">
                            <p>total price {products.cart_all_price}$</p>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            {/* <button type="button" className="btn btn-primary">Buy</button> */}
                            
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
export default observer(Cart)