import React,{useContext} from 'react'
import {ShopContext} from"../../context/shop-context"
import { PRODUCT } from '../../product'
import CartItem from "./cart-item"
import "./cart.css"


const Cart = () => {
  const{cartItem,getTotalCartAmount,formatMoney}=useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  return (
    <div className='cart'>
      <div className='productInCart'><h1>สิ้นค้าในตะกร้า</h1></div>
      <div className="cartItem">
      {PRODUCT.map((product) => {
        if (cartItem[product.id] !== 0){
          return <CartItem data={product}/>
        }
      })}
      </div>
      {totalAmount > 0 ? (
        <div>
        <p className='subtotal'> รวมทั้งสิน : {formatMoney(totalAmount)} บาท </p>
      </div>
      ) : (
        <h1 className='cartEmpty'>ไม่มีสินค้าในตะกร้า</h1>
      )}
    </div>
  )
}

export default Cart