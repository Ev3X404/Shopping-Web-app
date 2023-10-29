import React, { createContext, useState } from 'react'
import { PRODUCT } from '../product';
import { Product } from '../pages/shop/product';

export const ShopContext = createContext(null);

const getDefaultcart = ()=> {
    let cart = {}
    for (let i =1;i < PRODUCT.length +1; i++){
        cart[i] =0
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItem,setCartItem] = useState(getDefaultcart());
    
    function formatMoney(money) {
      return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
  

    const getTotalCartAmount = () =>{
      let totalAmount = 0;
      for (const item in cartItem) {
        if (cartItem[item]>0){
         let itemInfo = PRODUCT.find((product) => product.id === Number(item))
         totalAmount += cartItem[item] * itemInfo.price
      }
    }
    return totalAmount
  };
    
    const addToCart = (itemId) => {
        setCartItem((prev) => ({...prev,[itemId]: prev[itemId]+1 }))
    }

    const removefromCart = (itemId) => {
        setCartItem((prev) => ({...prev,[itemId]: prev[itemId]-1 }))
    }

    const deletefromCart = (itemId) => {
      setCartItem((prev) => ({...prev,[itemId]: prev[itemId]=0 }))
  }

    const contextValue = {cartItem, addToCart,removefromCart,deletefromCart,getTotalCartAmount,formatMoney}

   

  return (
    
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}


