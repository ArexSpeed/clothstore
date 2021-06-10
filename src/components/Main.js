import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { selectFavoriteItems } from '../features/favorite/favoriteSlice'
import Header from './Header';
import Banner from './Banner';

const Main = () => {
  const [products, setProducts] = useState([]);
  const favoriteProducts = useSelector(selectFavoriteItems);
  const getProduct = async () => await (await fetch('https://fakestoreapi.com/products')).json().then(res => setProducts(res)); 
  useEffect(() => getProduct(), [])
  console.log(products, 'pro')
  return (
    <main className="p-4">
      <Header site="New In" />
      <Banner />
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
