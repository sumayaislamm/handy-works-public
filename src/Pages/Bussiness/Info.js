import React from 'react';
import InfoCard from './InfoCard';
import ratings from '../../Images/logo-removebg-preview.png';


const Info = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 text-center'>
      <InfoCard img={ratings}></InfoCard>
      <InfoCard img={ratings}></InfoCard>
      <InfoCard img={ratings}></InfoCard>
    </div>
  );
};

export default Info;