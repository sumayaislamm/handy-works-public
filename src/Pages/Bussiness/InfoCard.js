import React from 'react';

const InfoCard = () => {
  return (
    <div className="card lg:card-side bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl">
    <figure><img src="https://i.ibb.co/68bFHFb/ratings-removebg-preview.png" alt="Album"/></figure>
    <div className="card-body text-white">
      <h2 className="card-title">33K+ Reviews</h2>
      <p>Click the button to listen on Spotiwhy app.</p>
    </div>
  </div>
  );
};

export default InfoCard;