import React from 'react';

const InfoCard = ({img, des, name}) => {
  return (
    <div  className='justify-center text-center h-2/4'>
      <div className="card lg:card-side bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl">
    <figure><img className='h-48' src={img} alt="Album"/></figure>
    <div className="card-body text-white">
      <h2 className="card-title">{name}</h2>
      <p>{des}</p>
    </div>
  </div>
    </div>
  );
};

export default InfoCard;