import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../features/cart/cartSlice';

const Cart = () => {
  const items = useSelector(selectCartItems)
  return (
    <div className="flex flex-col justify-center items-center">
      <div>My cart items</div>
      {items.map(item => (
        <CartItem item={item} />
      ))}

      <div className="relative group mt-4 z-20 w-32 h-12">
        <button className="relative z-20 w-32 h-12 bg-black text-gray-300 text-center rounded-lg">
          Check
        </button>
        <div className="absolute top-0 left-0 transform -rotate-12 transition duration-200 w-full h-full bg-green-300 rounded-lg z-10 group-hover:rotate-12" />
      </div>
    </div>
  )
}

export default Cart
