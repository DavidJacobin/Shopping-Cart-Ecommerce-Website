import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cart-item'
import { useNavigate  } from 'react-router-dom';
import './cart.css'

export const Cart = () => {

  const { cartItems,getTotal } = useContext(ShopContext)
  const navigate = useNavigate();
  const totalAmount = getTotal();

  return (

    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}

      </div>
      <div className='checkOut'>
        <p>Total: ${totalAmount}</p>
        <button className='cont' onClick={()=> navigate('/')}>Continue Shopping</button>
        <button className='pay'>Pay</button>
      </div>
    </div>
  )
}
