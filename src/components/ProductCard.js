import { useState } from 'react'

const ProductCard = () => {
  const [like, setLike] = useState(false);
  const [bag, setBag] = useState(false);
  return (
    <div className="w-72 min-w-max h-xl p-2 m-2 rounded-3xl border flex flex-col justify-between border-gray-100">
      <div className="relative h-3/4 w-full">
        <img className="rounded-3xl h-full object-cover" src="https://www.kindpng.com/picc/m/222-2220817_transparent-model-face-png-beautiful-women-png-png.png" alt="" />
        <button 
          className="absolute flex justify-center items-center top-4 right-4 w-8 h-8 rounded-xl bg-gray-200 bg-opacity-50 focus:outline-none"
          onClick={() => setLike(!like)} 
        >
          <svg className="w-6 h-6" fill={`${like ? 'pink' : 'none'}`} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        </button>
        <button 
          className={`absolute flex justify-center items-center bottom-4 left-4 w-8 h-8 rounded-xl bg-gray-200 bg-opacity-50 focus:outline-none ${bag && 'bg-green-300'}`}
          onClick={() => setBag(!bag)} 
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
        </button>
      </div>
      <div className="px-2">
        <div>Title</div>
        <div className="w-full text-right font-semibold text-red-300">$50.00</div>
      </div>
    </div>
  )
}

export default ProductCard
