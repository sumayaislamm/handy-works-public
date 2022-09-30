import React from "react";

const ShowReview = ({ review }) => {
  const { name, description, img } = review;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="avatar justify-center">
            <div class="w-36 mask mask-squircle">
              <img alt="Product Pic" src={img}/>
            </div>
          </div>
          <p className="bg-green-600">Name:{name}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowReview;
