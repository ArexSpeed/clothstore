import React from 'react'
import { useDispatch } from 'react-redux';
import { remove, incrementQty, decrementQty } from '../features/cart/cartSlice';


const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const increment = () => {
    console.log('increment')
    dispatch(incrementQty(item.id))
  }

  const decrement = () => {
    console.log('decrement')
    if(item.qty > 1) {
      dispatch(decrementQty(item.id))
    } else {
      dispatch(remove(item.id))
    }
  }

  return (
    <div className="w-72 max-w-min h-xl p-2 m-2 rounded-3xl border flex flex-col justify-between border-gray-100">
      <div className="h-3/4 w-full">
        <img className="rounded-3xl h-full max-w-xs object-contain" src={item.image} alt="" />
      </div>
      <div className="px-2">
        <div className="">{item.title.substring(0,20)}</div>
        <div className="w-full flex flex-row justify-between items-center">
          <div>
            <button 
              className="w-8 h-8 rounded-xl bg-green-300 text-gray-700 focus:outline-none"
              onClick={increment}
            >
              +
            </button>
             <span className="mx-2 font-semibold">{item.qty}</span>
            <button 
              className="w-8 h-8 rounded-xl bg-red-300 text-gray-700 focus:outline-none"
              onClick={decrement}
            >
              -
            </button> 
          </div>
          <div className="text-gray-900 font-bold">
            ${item.price * item.qty}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
