import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../features/cart/cartSlice';

const Cart = () => {
  const items = useSelector(selectCartItems)
  const calculateTotal = (items) =>
    items.reduce((acc, item) => acc + item.qty * item.price, 0);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>My cart items</div>
      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="relative group mt-4 z-20 w-32 h-12">
        <button className="button-primary">
          Check ${calculateTotal(items).toFixed(2)}
        </button>
        <div className="button-primary-after group-hover:rotate-12" />
      </div>
    </div>
  )
}

export default Cart
