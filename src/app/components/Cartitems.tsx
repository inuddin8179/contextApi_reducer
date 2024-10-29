"use client"
import React from 'react'
import { UseCart } from './Cartcontext'
import { producttype } from '../types/producttype';
function cartitems() {
  const {cart, increQuantity,decreQuantity,remove}=UseCart();
  const total=cart.reduce((total,product)=>total+product.price * product.quantity,0)
   const handleDecre=(productId:number)=>{
     decreQuantity(productId);
     const product=cart.find((item:producttype)=>item.id===productId.toString());
     if(product && product.quantity==0){
      remove(productId);
     }
   }
  return (
    <div className='border rounded-lg p-4 shadow-md'>
      <h2 className=' text-lg font-semibold mb-4 text-centre'>Your cart</h2>
      {cart.length===0?(<p>your cart is empty</p>):(  <ul>
         {cart.map((product)=>(  <li key={product.id} className='flex justify-between items-centre mb-2'>
           <div>
              <p className='font-semibold'>{product.name}</p>
              <p className='text-gray-400'>{product.price.toFixed(2)} x {product.quantity}</p>
           </div>
        
       <div className='flex space-x-2'>
        <button className='rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' onClick={()=>handleDecre(Number(product.id))}>-</button>
        <button className='rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' onClick={()=>increQuantity(Number(product.id))}>+</button>
       </div>
       </li>)
           
         )}
      
      </ul>) }
    
      <div className='mt-4'>
        <p className='text-lg font-semibold'>Total amout: ${total.toFixed(2)}</p>
      </div>
      <button onClick={()=>{}} className='rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'> Buy now</button>
    </div>
  )
}

export default cartitems
