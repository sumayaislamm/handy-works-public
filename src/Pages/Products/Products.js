import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect( ()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setProducts(data));
  }, []);

  return (

    <div>
      <h1 className='text-4xl lg:text-8xl text-center p-2 lg:p-8  ' >Here Our <span className='text-cyan-500'>Products</span></h1>
      <p className=' text-xl lg:text-4xl text-center'>You Can <span className='text-cyan-500'>Choice Here</span></p>
      <div class="divider"></div> 
      <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4 p-12'>
   
   {
     products.map(product => <Product
     key={product._id}
     product={product}
     ></Product>)
   }
    </div>
    </div>
  );
};

export default Products;