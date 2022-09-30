import React from "react";

const Service = ({service}) => {
 
  return (
    <div className="card lg:w-72 w-30  bg-green-100 shadow-xl">
      <figure className="px-20 pt-20">
        <img
          src={service.img}
          alt="Services"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{service.name}</h2>
        <p>{service.description}</p>
        <div className="card-actions">
        </div>
      </div>
    </div>
  );
};

export default Service;
