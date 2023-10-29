import React, { useContext } from "react";
import {ShopContext} from"../../context/shop-context"

export const Product = (props) => {
    const{id,productName,price,productImage} = props.data
    const{addToCart,cartItem,formatMoney}=useContext(ShopContext)

    const cartItemAmount = cartItem[id]
    return <div className="product-card">
        <img src={productImage} className="product-image"/>
        <div className="description">
            <h1>{productName}</h1>
            <h2>{formatMoney(price)} บาท</h2>
            <button onClick={()=>addToCart(id)}>
                Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>} 
            </button>
        </div>
    </div>

};