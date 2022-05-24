import React from "react";
import { Link } from "react-router-dom";

const Product = ({product}) => {
  const {_id , name, img,price, description,avilable,minimun } = product;
  return (
    <div>
      <div className="card grid grid-cols-2 gap-0 lg:gap-4 lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="bg-auto m-0 lg:ml-10"
            src={img}
            alt="Album"
          />
        </figure>
        <div className="card-body p-2 lg:p-12">
          <h2 className="card-title text-xl lg-text-3xl text-cyan-500  text-center">{name}</h2>
          <p className="bold">{description}</p>
          <p className="text-sm lg:text-xl text-cyan-500">Price:{price}</p>
          <p className="text-sm lg:text-xl text-cyan-500">Stock:{avilable}</p>
          <p className="text-sm lg:text-xl text-cyan-500">Minimum Order:{minimun}</p>
          <div className="card-actions justify-end">
            <Link to="/" className="btn mt-2 lg:mt-12 btn-primary bg-gradient-to-r from-cyan-500 to-blue-500">Place Order</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
