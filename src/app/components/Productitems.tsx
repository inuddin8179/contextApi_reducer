'use client'
import React from 'react';
import { producttype } from '../types/producttype'; 
import { UseCart } from './Cartcontext';
interface ProductItemsProps {
  product: producttype;
}

function Productitems({ product }: ProductItemsProps) {
  const {addTocart,cart}=UseCart();
  const isproductincart=cart.some((item)=>item.id===product.id)
  return (
    <div className='border rounded-lg p4 shadow-md'>
      <h2 className='text-lg font-semibold'>{product.name}</h2>
      <p className='text-gray-500'>Price: ${product.price.toFixed(2)}</p>
      <button onClick={()=>addTocart(product)} disabled={isproductincart} className='  bg-blue-200 mt-2 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'> 
         {isproductincart? "added to cart" :"Add to cart"}
         </button>
    </div>
  );
}
export default Productitems;
