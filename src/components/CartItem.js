import React from 'react'

const CartItem = () => {
  return (
    <div className="w-72 min-w-max h-xl p-2 m-2 rounded-3xl border flex flex-col justify-between border-gray-100">
      <div className="relative h-3/4 w-full">
        <img className="rounded-3xl h-full object-cover" src="https://www.kindpng.com/picc/m/222-2220817_transparent-model-face-png-beautiful-women-png-png.png" alt="" />
      </div>
      <div className="px-2">
        <div>Title</div>
        <div className="w-full flex flex-row justify-between items-center">
          <div>
            <button className="w-8 h-8 rounded-xl bg-green-300 text-gray-700 focus:outline-none">+</button>
             <span className="mx-2 font-semibold">1</span>
            <button className="w-8 h-8 rounded-xl bg-red-300 text-gray-700 focus:outline-none">-</button> 
          </div>
          <div className="text-gray-900 font-bold">
            $50.00
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
