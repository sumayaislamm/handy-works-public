import React from 'react';
import InfoCard from './InfoCard';
import ratings from '../../Images/ratings-removebg-preview.png';
import customer from '../../Images/png-transparent-computer-icons-shopping-happy-woman-miscellaneous-hand-logo-removebg-preview - Copy.png';
import tools from '../../Images/pngtree-tool-icon-png-image_1869818_477x441-removebg-preview.png';


const Info = () => {
  const name1 = "120M+ Annual revenue";
  const des1 = " Annual revenue which made our more trusted";
  const name2 = "Happy All Costomers";
  const des2 = "we served 100+ customers";
  const name3 = "50k+ more tools";
  const des3 = "Unlimited tools whice made mucj more attractive";
  return (
    <div className='justify-center text-center mx-4'>
      <h1 className="text-center   my-20 text-5xl font-bold"> <span className="text-cyan-500">Bussiness</span> Summary</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 '>
      <InfoCard name={name1} des={des1} img={ratings}></InfoCard>
      <InfoCard name={name2} des={des2} img={customer}></InfoCard>
      <InfoCard name={name3} des={des3} img={tools}></InfoCard>
    </div>
    </div>
  );
};

export default Info;