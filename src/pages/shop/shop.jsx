import React from 'react'
import {PRODUCT}  from '../../product'
import {Product} from "./product"
import "./shop.css"

const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        {/* <h1>online shop</h1> */}
      </div>
      <div className='section1'>
      
      {PRODUCT.map((product)=>(
        <Product key={product.id} data={product}/>
      ))}
      </div>
    </div>
  )
}

export default Shop
