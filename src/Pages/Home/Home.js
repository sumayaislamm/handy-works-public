import React from 'react';
import Info from '../Bussiness/Info';
import Products from '../Products/Products';
import Banner from '../Shared/Banner';



// import CountDown from './CountDown';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Info></Info>

      {/* <CountDown></CountDown> */}
    </div>
  );
};

export default Home;