import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0
    };

    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId]+1}))
    };

    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId]-1}))
    };

    const updateCartItemCount = (newAmount, itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    };

    const getTotal = () =>{
        let total = 0
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let iteminfo = PRODUCTS.find((product)=> product.id ===Number(item))
                total += cartItems[item] * iteminfo.price
            }
        }

        return total
    };

    const contexValue = {cartItems, addToCart, removeFromCart,updateCartItemCount,getTotal };


    
    return (
        <ShopContext.Provider value={contexValue}>{props.children}</ShopContext.Provider>

    )
}
