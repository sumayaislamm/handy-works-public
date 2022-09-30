import React from 'react';
import InfoCard from './InfoCard';


const Info = () => {
  const name1 = "120M+ Annual revenue";
  const des1 = " Annual revenue which made our more trusted";
  const name2 = "40k+ more customers";
  const des2 = "Unlimited tools whice made much more attractive";
  const name3 = "50k+ more tools";
  const des3 = "Unlimited tools whice made much more attractive";
  const ratings = "https://i.ibb.co/1bZPtcr/trust.png";
  const customer = "https://i.ibb.co/y8YXQ5f/customer.png";
  const tools = "https://i.ibb.co/NNCRN5p/good-review.png";
  return (
    <div className='justify-center text-center mx-4'>
      <h1 className="text-center   my-20 text-3xl "> <span className="text-green-600">Bussiness</span> Summary</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 '>
      <InfoCard name={name1} des={des1} img={ratings}></InfoCard>
      <InfoCard name={name2} des={des2} img={customer}></InfoCard>
      <InfoCard name={name3} des={des3} img={tools}></InfoCard>
    </div>
    </div>
  );
};

export default Info;