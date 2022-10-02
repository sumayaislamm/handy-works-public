import React from 'react';

const AllReview = ({review}) => {
  const { name, description, img, ratting , email } = review;
 
  return (
    <div>
    <div class="card w-42 h-72  bg-base-100  shadow-xl">
      <div class="card-body">
      <p className="text-green-500 m-2 w-42 h-1">{name}</p>
      <p className="text-green-500 m-2 w-42 h-1">{email}</p>
        <div class="avatar justify-center ">
        <div class="w-20 mt-4  rounded-full">
            <img alt="Product Pic" src={img} />
          
        </div>
        </div>
        <p>{description}</p>
        <div>
          <div class="rating rating-md">
            <div class="mask mask-star-2 text-xl bg-orange-400">
              {ratting}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AllReview;