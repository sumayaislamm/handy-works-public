import React from 'react';

const InfoCard = ({img, des, name }) => {
  return (
    <div  className='justify-center text-center '>
      <div className="card lg:card-side  shadow-xl">
    <figure className=''><img className='px-10 mx-10' src={img} alt="Album"/></figure>
    <div className="card-body text-black">
      <h2 className="card-title">{name}  </h2>
      <p>{des}</p>
    </div>
  </div>
    </div>
  );
};

export default InfoCard;