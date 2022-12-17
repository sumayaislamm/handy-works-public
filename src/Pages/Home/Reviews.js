import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShowReview from "./ShowReview";
import { BsFillArrowRightSquareFill } from 'react-icons/bs';

const MyReview = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    const url = `https://assingment-12-server-production.up.railway.app/review`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div id='review' className=" justify-center text-center mt-4 mb-20">
      <h1 className="text-center text-green-900 my-20 text-3xl ">What Our Previous Customers Said?</h1>
      <div className="grid grid-cols-5 gap-10">
      {review.slice(0,5).map((review) => (
        <ShowReview review={review} key={review._id}></ShowReview>
      ))}
      </div>
      
      <div>
      <div className='text-center justify-center items-end flex ml-82 mb-20 mt-10'><Link to="/allreviews" className='mt-2 ml-10 w-96 px-24 py-3 text-white text-center bg-green-900 flex'>See More Reviews<span className="m-1"> <BsFillArrowRightSquareFill/></span></Link></div>
    </div>
    </div>
  );
};

export default MyReview;
