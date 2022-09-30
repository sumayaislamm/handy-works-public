import React, { useEffect, useState } from "react";
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
      <h1 className="text-center text-green-900  my-20 text-3xl ">What Our Previous Customers Said?</h1>
      <div className="grid grid-cols-3 gap-10">
      {review.map((review) => (
        <ShowReview review={review} key={review._id}></ShowReview>
      ))}
      </div>
      
    </div>
  );
};

export default MyReview;
