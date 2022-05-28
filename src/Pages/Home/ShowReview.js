import React from 'react';

const ShowReview = ({review}) => {
  const {name, description} = review;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Reviews</h2>
          <p>Name:{review.name}</p>
          <p>{review.description}</p>
        </div>
        {/* <figure>
          <img
            src="https://i.ibb.co/4KWpzQy/images-441x470-removebg-preview-1.png"
            alt="review"
          />
        </figure> */}
      </div>
    </div>
  );
};

export default ShowReview;