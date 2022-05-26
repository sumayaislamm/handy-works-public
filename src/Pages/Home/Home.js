import React from 'react';
import Info from '../Bussiness/Info';
import Products from '../Products/Products';
import Banner from '../Shared/Banner';
import CountDown from './CountDown';
import Services from './Services';


const Home = () => {

  const TWENTY_DAYS_IN_MS = 190 * 9 * 17 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterTwentyDays = NOW_IN_MS + TWENTY_DAYS_IN_MS;
  return (
    <div>
      <Banner></Banner>
      <div className='px-12'>
      <Products></Products>
      <Services></Services>
      <Info ></Info>
    <CountDown targetDate={dateTimeAfterTwentyDays}></CountDown>
    </div>
    </div>
  );
};

export default Home;