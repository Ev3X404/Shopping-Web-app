import React, { useContext } from "react";
import {ShopContext} from"../../context/shop-context"

const CartItem = (props) => {

    const{id,productName,price,productImage} = props.data
    const{addToCart,cartItem,removefromCart,deletefromCart,formatMoney}=useContext(ShopContext)

    const cartItemAmount = cartItem[id]

    const numOne = parseFloat(price);
    const numTwo = parseFloat(cartItemAmount);

  return (
    <div className='cartItemInfo'>

      <img src={productImage} className="productImage"/>

      <div className='description'>
        <p className="productNamee">{productName}</p>
        <p>ราคาต่อชิ้น {formatMoney(price)} บาท</p>

        <div className="buttonBar">
        <button onClick={()=>removefromCart(id)}>-</button>
        <input value={cartItemAmount}/>
        <button onClick={()=>addToCart(id)}>+</button>
        </div>

        <button onClick={()=>deletefromCart(id)}>X</button>
        <p>รวม {formatMoney(numOne*numTwo)} บาท</p>
      </div>
    </div>
  )
}

export default CartItem
