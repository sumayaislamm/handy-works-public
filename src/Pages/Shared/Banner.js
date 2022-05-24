import React from 'react';

const Banner = () => {
  return (
    <div>
      <div
        className="hero backgndImg min-h-screen"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              You can visit our Website from here. <br />
              then let's start...
            </p>
            <button to="/" className="btn btn-link btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;