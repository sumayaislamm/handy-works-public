import React, { useEffect, useState } from 'react';
import AllProduct from './AllProduct';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect( ()=>{
    fetch('https://safe-anchorage-57552.herokuapp.com/products')
    .then(res => res.json())
    .then(data => setProducts(data));
  }, []);
  return (
    <div>
    <h1 className='text-4xl lg:text-5xl text-center p-2 lg:p-8  ' >Here Our <span className='text-green-600'>Products</span></h1>
    <p className=' text-xl lg:text-xl text-center'>You Can <span className='text-green-600'>Choice Here</span></p>
    <div className="divider"></div> 
    <div className=' grid grid-cols-1 lg:grid-cols-4 gap-4 p-12'>
 
 {
   products.map(product => <AllProduct
   key={product._id}
   product={product}
   ></AllProduct>)
 }
  </div>
  
  </div>
  );
};

export default AllProducts;