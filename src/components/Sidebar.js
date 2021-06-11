import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux';
import { selectIsOpen } from '../features/sidebar/sidebarSlice';
import { filterProducts } from '../features/products/productsSlice';
 
const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const open = useSelector(selectIsOpen);
  const dispatch = useDispatch();

  const handleFilter = (type) => {
    dispatch(filterProducts(type))
  }

  return (
    <div className={`${!open && 'hidden'} p-4 flex flex-col justify-between items-start w-64 max-w-xs h-full min-h-screen shadow-md`}>
    <div className="w-full flex flex-col justify-center items-start">
      <section>
        <div className="w-24 h-10 border border-black bg-green-300 flex justify-center items-center font-semibold">
          Logo
        </div>
      </section>
      <section>
        <h3 className="mt-4 mb-4 font-semibold">Explore</h3>
        <ul className="w-full">
          <Link 
            to="/" 
            className="w-full py-3 group flex flex-row justify-between items-center text-sm cursor-pointer"
            onClick={() => handleFilter('all')}
          >
            <div className="flex">
              <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className={`mx-4 group-hover:font-semibold ${pathname === '/' && 'font-semibold'}`}>New In</span>
            </div>
            <div className={`w-2 h-2 mx-3 rounded-full group-hover:bg-red-300 ${pathname === '/' && 'bg-green-300'}`}></div>
          </Link>
          <li className="w-full py-3 group flex flex-row justify-between items-center text-sm cursor-pointer">
            <div className="flex">
              <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="mx-4 group-hover:font-semibold active:font-semibold">Sale</span>
            </div>
            <div className="w-2 h-2 mx-3 rounded-full group-hover:bg-red-300 active:bg-green-300"></div>
          </li>
          <li className="w-full py-3 group flex flex-row justify-between items-center text-sm cursor-pointer">
            <div className="flex">
              <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              <span className="mx-4 group-hover:font-semibold active:font-semibold">Clothing</span>
            </div>
            <div className="w-2 h-2 mx-3 rounded-full group-hover:bg-red-300 active:bg-green-300"></div>
          </li>
          <li className="w-full py-3 group flex flex-row justify-between items-center text-sm cursor-pointer">
            <div className="flex">
            <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
              <span className="mx-4 group-hover:font-semibold active:font-semibold">Shoes</span>
            </div>
            <div className="w-2 h-2 mx-3 rounded-full group-hover:bg-red-300 active:bg-green-300"></div>
          </li>
          <li className="w-full py-3 group flex flex-row justify-between items-center text-sm cursor-pointer">
            <div className="flex">
              <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span className="mx-4 group-hover:font-semibold active:font-semibold">Accessories</span>
            </div>
            <div className="w-2 h-2 mx-3 rounded-full group-hover:bg-red-300 active:bg-green-300"></div>
          </li>
          <li className="w-full py-3 group flex flex-row justify-between items-center text-sm cursor-pointer">
            <div className="flex">
              <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
              <span className="mx-4 group-hover:font-semibold active:font-semibold">Inspiration</span>
            </div>
            <div className="w-2 h-2 mx-3 rounded-full group-hover:bg-red-300 active:bg-green-300"></div>
          </li>
          <li className="w-full py-3 group flex flex-row justify-between items-center text-sm cursor-pointer">
            <div className="flex">
              <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" /></svg>
              <span className="mx-4 group-hover:font-semibold active:font-semibold">Outlet</span>
            </div>
            <div className="w-2 h-2 mx-3 rounded-full group-hover:bg-red-300 active:bg-green-300"></div>
          </li>
        </ul>
      </section>
    </div>
    <div className="w-full flex flex-col justify-between">
      <section className="w-36 h-36 shadow-md rounded-xl flex flex-col justify-between items-center">
          <h3 className="text-lg text-center mt-2">LOVE</h3>
          <div>
            <p className="text-sm font-semibold">Get up to <span className="text-red-300">14%</span> of all</p>
            <p className="text-xs text-center">With code <span className="text-red-300">LOVE</span></p>
          </div>
          <button className="w-8 h-8 mb-2 bg-black text-white flex justify-center items-center font-semibold text-sm rounded-lg">OK</button>
      </section>
      <section className="w-full py-3 group flex flex-row justify-between items-center text-sm cursor-pointer">
        <div className="flex">
          <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
          <span className="mx-4 group-hover:font-semibold active:font-semibold">Log Out</span>
        </div>
      </section>
    </div>
  </div>
  )
}

export default Sidebar
