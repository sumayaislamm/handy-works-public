import React from 'react';
import Products from '../Products/Products';
import Banner from '../Shared/Banner';


// import CountDown from './CountDown';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>

      {/* <CountDown></CountDown> */}
    </div>
  );
};

export default Home;