import React from "react";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const MyReview = () => {
  return (
    <div className=" flex justify-center ">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Reviews</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <Rating className=" text-center justify-center "
            initialRating={4.5}
            emptySymbol={<AiOutlineStar />}
            fullSymbol={<AiFillStar style={{ color: "goldenrod" }} />}
            readonly
          ></Rating>
        <figure>
          <img
            src="https://i.ibb.co/4KWpzQy/images-441x470-removebg-preview-1.png"
            alt="review"
          />
        </figure>
      </div>
    </div>
  );
};

export default MyReview;
