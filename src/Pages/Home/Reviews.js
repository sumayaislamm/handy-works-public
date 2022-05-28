import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import ShowReview from "./ShowReview";

const MyReview = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/review`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div className=" justify-center text-center my-12 ">
      <h1 className="text-center text-cyan-500  my-20 text-5xl font-bold">Reviews</h1>
      <div class="avatar">
        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://api.lorem.space/image/face?hash=3174" />
        </div>
      </div>
      <Rating
        className=" text-center justify-center "
        initialRating={4.5}
        emptySymbol={<AiOutlineStar />}
        fullSymbol={<AiFillStar style={{ color: "goldenrod" }} />}
        readonly
      ></Rating>
      {review.map((review) => (
        <ShowReview review={review} key={review._id}></ShowReview>
      ))}
    </div>
  );
};

export default MyReview;
