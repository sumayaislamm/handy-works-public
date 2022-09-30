import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect( ()=>{
    fetch('https://safe-anchorage-57552.herokuapp.com/product')
    .then(res => res.json())
    .then(data => setProducts(data));
  }, []);

  return (

    <div id='product' >
      <h1 className='text-4xl lg:text-5xl text-center p-2 lg:p-8  ' >Here Our <span className='text-green-600'>Products</span></h1>
      <p className=' text-xl lg:text-xl text-center'>You Can <span className='text-green-600'>Choice Here</span></p>
      <div className="divider"></div> 
      <div className=' grid grid-cols-1 lg:grid-cols-4 gap-4 p-12'>
   
   {
     products.map(product => <Product
     key={product._id}
     product={product}
     ></Product>)
   }
    </div>
    <div className='text-center justify-center items-end flex ml-82 '><Link to="/allproducts" className='mt-2 ml-10 w-96 px-24 py-3 text-white text-center bg-green-900 flex'>See More Products<span className="m-1"> <BsFillArrowRightSquareFill/></span></Link></div>
    </div>
  );
};

export default Products;