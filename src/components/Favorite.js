import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { selectFavoriteItems } from '../features/favorite/favoriteSlice'
import Header from './Header';

const Favorite = () => {
  const favoriteProducts = useSelector(selectFavoriteItems);
  return (
    <main className="p-4">
      <Header site="Favorite" />
      <section className="flex flex-col mt-6">
        <div className="flex flex-row justify-between items-center">
          <h4 className="font-semibold">My Favorites</h4>
          <a href="#" className="text-gray-500">View All</a>
        </div>
        <div className="flex flex-row w-auto overflow-x-scroll">
          {favoriteProducts?.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </main>
  )
}

export default Favorite
