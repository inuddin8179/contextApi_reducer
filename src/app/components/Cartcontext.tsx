"use client"
import { createContext, useContext, useState, ReactNode } from "react"
import { producttype } from "../types/producttype";
interface cartcontexttype{
 cart:producttype[];
 addTocart:(product:producttype)=>void
 remove:(productId:number)=>void
 increQuantity:(productId:number)=>void
 decreQuantity:(productId:number)=>void
}

const cartContext=createContext<cartcontexttype | undefined>(undefined);
interface cartProviderprop{
    children:ReactNode
}
export const CartProvider:React.FC<cartProviderprop>=({children})=>{
    const [cart, setCart]=useState<producttype[]>([]);
    const addTocart=(product:producttype)=>{
        const existProduct=cart.findIndex((item)=>item.id===product.id)
        if(existProduct!==-1){
            const updatedCart=[...cart];
            updatedCart[existProduct].quantity+=1;
            setCart(updatedCart);
        }
        else{
            setCart([...cart,{...product,quantity:1}])
        }
    }
    const remove=(productId:number)=>{
       const updatedCart=cart.filter((item)=>item.id!==productId.toString())
       setCart(updatedCart);
    }
    const increQuantity =(productId:number)=>{
        const updatedCart=cart.map((item)=>  (item.id===productId.toString()) ? {...item,quantity:item.quantity+1}:item )
        setCart(updatedCart);
    }
    const decreQuantity=(productId:number)=>{
        const updatedCart=cart.map((item)=>  (item.id===productId.toString()) ? {...item,quantity:item.quantity>0 ?item.quantity-1:0 }:item )
        setCart(updatedCart);
    }
    return (
        <cartContext.Provider value={{cart, addTocart,remove,increQuantity,decreQuantity}}>
            {children}
        </cartContext.Provider>
    ) 

    }
    export const UseCart=():cartcontexttype=>{
        const context=useContext(cartContext);
        if(context===undefined){
            throw new Error("use cart must be with in cart provider")
        }
        return context;
    }
    