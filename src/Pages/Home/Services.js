import React from 'react';
import Service from './Service';

const Services = () => {
  const services=
  [
    {
      _id: 1,
      name:'Fast Communication',
      description:'We response as soon as possible for provide you best services',
      img:"https://i.ibb.co/GxvPStR/communication.png"

    },
    {
      _id: 2,
      name:'Care Customers',
      description:'We cared your time and help to make best disition.',
      img:"https://i.ibb.co/1KXHH18/care.png"

    },
    {
      _id: 3,
      name:'Fast Delivery',
      description:'We response and provide our delivery as soon as possible',
      img:"https://i.ibb.co/QrXY9pK/delivery-moto.png"

    },
    {
      _id: 4,
      name:'Trust Us',
      description:'We are trustable and care your valuable time',
      img:"https://i.ibb.co/K9csH2R/shield.png"

    },
  ]
  return (
    <div>
    <div>
      <h1 className='text-4xl lg:text-3xl text-center p-2 lg:p-8  ' >Here Our <span className='text-green-600'>Services</span></h1>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-10'>
    {
      services.map(service => <Service
      key={service._id}
      service={service}
      ></Service>)
    }
    </div>
    </div>
  );
};

export default Services;