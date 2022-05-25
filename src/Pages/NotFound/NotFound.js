import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1 className="text-cyan-500 text-center text-6xl  my-20 lg:text-9xl font-bold">Oppps!!</h1>
      <h5 className='text-center  my-20 text-3xl lg:text-5xl font-bold'>404 PAGE NOT FOUND</h5>
      <p className='text-center  my-20 lg:text-3xl text-xl font-bold'>The page you are looking for might have been removed <br /> had it's name changed or it's temporarily unavilable. <br />
      <Link to="/" className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 mt-4 ">
              BACK TO HOME
            </Link>
            </p>
    </div>
  );
};

export default NotFound;