import React from 'react'
import { useDispatch, useSelector } from 'react-redux'; 
import { filterProducts, selectFilterProducts } from '../features/products/productsSlice';

const Header = ({ site }) => {
  const filter = useSelector(selectFilterProducts);
  const dispatch = useDispatch();

  const handleFilter = (type) => {
    dispatch(filterProducts(type))
  }
  return (
    <header className="flex flex-row justify-between items-center">
    <div>
      <div className="flex">
        <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="mx-4 font-semibold">{site}</span>
      </div>
    </div>
    <div className="flex flex-row">
      <div className="hidden md:block">
        <button 
          className={`${filter === 'men' && 'header-button-active'} header-button`}
          onClick={() => handleFilter('men')}
        >
          Men
        </button>
        <button 
          className={`${filter === 'women' && 'header-button-active'} header-button`}
          onClick={() => handleFilter('women')}
        >
          Women
        </button>
        <button 
          className={`${filter === 'kids' && 'header-button-active'} header-button `}
          onClick={() => handleFilter('kids')}
        >
          Kid's
        </button>
      </div>
      <select 
        className="md:hidden w-28 h-8 mx-3 px-2 rounded-lg border bg-transparent border-gray-100 text-center text-sm"
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="all">Default</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kids">Kid's</option>
      </select>
      <button className="text-left px-2 header-button">
        <div className="flex flex-row justify-start items-center">
          <div className="w-4 h-4 text-xs bg-black text-white text-center rounded-full">0</div>
          <span className="px-2">Filter</span>
        </div>
      </button>
    </div>
  </header>
  )
}

export default Header
