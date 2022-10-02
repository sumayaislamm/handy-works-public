import React, { useEffect, useState } from 'react';
import AllReview from './AllReview';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect( ()=>{
    fetch('https://safe-anchorage-57552.herokuapp.com/review')
    .then(res => res.json())
    .then(data => setReviews(data));
  }, []);
  return (
    <div>
    <h1 className='text-4xl lg:text-5xl text-center p-2 lg:p-8  ' >Here Our <span className='text-green-600'>Customers Reviews</span></h1>
    <p className=' text-xl lg:text-xl text-center'>You Can <span className='text-green-600'>Also Give Review Here</span></p>
    <div className='text-center justify-center items-end flex ml-82 mb-20 mt-10'><Link to="/addproducts" className='mt-2 w-86 px-24 py-3 text-white text-center bg-green-900 flex'>Give Reviews<span className="m-1 px-2"> <BsFillArrowRightSquareFill/></span></Link></div>
    <div className="divider"></div> 
    <div className=' grid grid-cols-1 lg:grid-cols-4 gap-4 p-12'>
 
 {
   reviews.map(review => <AllReview
   key={review._id}
   review={review}
   ></AllReview>)
 }
  </div>
  
  </div>
  );
};

export default AllReviews;