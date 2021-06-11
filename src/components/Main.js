import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from './ProductCard';
import { selectFavoriteItems } from '../features/favorite/favoriteSlice'
import { allProducts,selectFilterProducts, selectAllProducts, selectMenProducts, selectWomenProducts, selectKidsProducts, fetchAllProducts, fetchMenProducts, fetchWomenProducts, fetchKidsProducts } from '../features/products/productsSlice'
import Header from './Header';
import Banner from './Banner';

const Main = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterProducts);
  const allProducts = useSelector(selectAllProducts);
  const menProducts = useSelector(selectMenProducts);
  const womenProducts = useSelector(selectWomenProducts);
  const kidsProducts = useSelector(selectKidsProducts);

  useEffect(() => {
    dispatch(fetchAllProducts())
    dispatch(fetchMenProducts())
    dispatch(fetchWomenProducts())
    dispatch(fetchKidsProducts())
  }, [])

  useEffect(() => {
    console.log(filter, 'filter in main')
    if(filter === 'all') {
      setProducts(allProducts)
    }
    if(filter === 'men') {
      setProducts(menProducts)
    }
    if(filter === 'women') {
      setProducts(womenProducts)
    }
    if(filter === 'kids') {
      setProducts(kidsProducts)
    }
  }, [filter, allProducts, menProducts, womenProducts, kidsProducts])
  console.log(products, 'products in main')
  // const getProduct = async () => await (await fetch('https://fakestoreapi.com/products')).json().then(res => setProducts(res)); 
  // useEffect(() => getProduct(), [])
  // console.log(products, 'pro')
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
          {products[0]?.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </main>
  )
}

export default Main
