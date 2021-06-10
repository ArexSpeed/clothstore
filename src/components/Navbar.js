import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectTotalItems } from '../features/cart/cartSlice';

const Navbar = ({ setCartOpen }) => {
  const totalItems = useSelector(selectTotalItems);
  return (
    <nav className="p-4 flex flex-row justify-between items-center">
      <section className="w-1/2">
        <div className="w-full h-8 flex flex-row justify-start items-center bg-gray-100 rounded-md">
          <svg className="w-4 h-4 text-gray-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <input className="bg-transparent text-sm" placeholder="Search ..." />
        </div>
      </section>
      <section className="flex flex-row">
        <Link to="/favorite">
          <button className="relative mx-2 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          <div className="absolute w-2 h-2 top-1 -right-1 bg-red-300 rounded-full"></div>
          </button>
        </Link>
        <button 
          className="relative mx-2 focus:outline-none"
          onClick={() => setCartOpen(true)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
          {totalItems !== 0 && (
            <div className="absolute w-3 h-3 top-1 -right-1 bg-red-300 text-white rounded-full text-xs flex justify-center items-center">{totalItems}</div>
          )}
        </button>
        <button className="mx-2 focus:outline-none">
          <div className="w-6 h-6 rounded-full overflow-hidden flex justify-center">
            <img className="object-cover" src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
          </div>
        </button>
        <select className="mx-2 focus:outline-none">
          <option>En</option>
          <option>Pl</option>
        </select>
      </section>
    </nav>
  )
}

export default Navbar
