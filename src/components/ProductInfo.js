import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import products from "../store/products"
import CartButton from "./CartButton"
const ProductInfo = ({ product }) => {
    let href1 = `#productInfo${product.id}`
    let id1 = `productInfo${product.id}`
    return (
        <>
            <a href={href1} className="btn btn-info" data-bs-toggle="modal">Info</a>

            <div id={id1} className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Product Info</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <img className="card-img-top" src={product.image} alt="Card image cap" />
                            <h5 className="modal-title">{product.title}</h5>
                            <p>{product.price}$</p>
                            <p>{product.description}</p>
                            <p>{product.rating.rate}★ , {product.rating.count}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <CartButton product={product} />

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default observer(ProductInfo)