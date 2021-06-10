import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

const Main = () => {
  const [products, setProducts] = useState([])
  const getProduct = async () => await (await fetch('https://fakestoreapi.com/products')).json().then(res => setProducts(res)); 
  useEffect(() => getProduct(), [])
  console.log(products, 'pro')
  return (
    <main className="p-4">
      <header className="flex flex-row justify-between items-center">
        <div>
          <div className="flex">
            <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span className="mx-4 font-semibold">New In</span>
          </div>
        </div>
        <div className="">
          <button className="w-28 h-8 mx-3 rounded-lg border border-gray-100 text-center text-sm transition duration-200  hover:bg-purple-400 hover:text-white hover:transition hover:duration-200">
            Men
          </button>
          <button className="w-28 h-8 mx-3 rounded-lg border border-gray-100 text-center text-sm transition duration-200  hover:bg-purple-400 hover:text-white hover:transition hover:duration-200">
            Women
          </button>
          <button className="w-28 h-8 mx-3 rounded-lg border border-gray-100 text-center text-sm transition duration-200  hover:bg-purple-400 hover:text-white hover:transition hover:duration-200">
            Kid's
          </button>
          <select className="w-28 h-8 mx-3 px-2 rounded-lg border border-gray-100 text-center text-sm">
            <option>Default</option>
          </select>
          <button className="text-left px-2 w-28 h-8 rounded-lg border border-gray-100 text-sm transition duration-200  hover:bg-purple-400 hover:text-white hover:transition hover:duration-200">
            <div className="flex flex-row justify-start items-center">
              <div className="w-4 h-4 text-xs bg-black text-white text-center rounded-full">0</div>
              <span className="px-2">Filter</span>
            </div>
          </button>
        </div>
      </header>
      <section className="my-4 w-full h-96 rounded-3xl flex flex-row justify-around items-center bg-gray-100 overflow-hidden">
        <div className="mt-24 mb-8 h-2/3 w-1/2 flex flex-col justify-around items-start">
          <h1 className="text-4xl font-bold">SPRING 2021</h1>
          <h1 className="text-4xl font-bold"> READY-TO-WEAR </h1>
          <h3 className="text-xl">We'll be saying "spring has sprung" before you know it</h3>
          <div className="relative group z-20 w-32 h-12">
            <button className="relative z-20 w-32 h-12 bg-black text-gray-300 text-center rounded-lg">
              Shop Now
            </button>
            <div className="absolute top-0 left-0 transform -rotate-12 transition duration-200 w-full h-full bg-green-300 rounded-lg z-10 group-hover:rotate-12" />
          </div>
        </div>
        <div>
          <img className="object-cover h-96" src="https://www.kindpng.com/picc/m/222-2220817_transparent-model-face-png-beautiful-women-png-png.png" alt="" />
        </div>
      </section>
      <section className="flex flex-col mt-6">
        <div className="flex flex-row justify-between items-center">
          <h4 className="font-semibold">Popular Now</h4>
          <a href="#" className="text-gray-500">View All</a>
        </div>
        <div className="flex flex-row w-auto overflow-x-scroll">
          {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </main>
  )
}

export default Main
