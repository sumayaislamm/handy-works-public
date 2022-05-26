import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="hero  bannerImg ">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Welcome to our center. <br /> You can visit here and get product as you like.
            </p>
            <a href="#product" className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 ">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
