import React from 'react';
import Service from './Service';

const Services = () => {
  const services=
  [
    {
      _id: 1,
      name:'Fast Communication',
      description:'We response as soon as possible for provide you best services',
      img:"https://i.ibb.co/5hG4Mzc/service-tools-icon-vector-6202035-441x470-removebg-preview.png"

    },
    {
      _id: 2,
      name:'Care Customers',
      description:'We cared your time and help to make best disition.',
      img:"https://i.ibb.co/6mMPtT0/system-settings-icon-23-removebg-preview.png"

    },
    {
      _id: 3,
      name:'Fast Delivery',
      description:'We response and provide our delivery as soon as possible',
      img:"https://i.ibb.co/4KWpzQy/images-441x470-removebg-preview-1.png"

    },
  ]
  return (
    <div>
    <div>
      <h1 className='text-4xl lg:text-8xl text-center p-2 lg:p-8  ' >Here Our <span className='text-cyan-500'>Services</span></h1>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10'>
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