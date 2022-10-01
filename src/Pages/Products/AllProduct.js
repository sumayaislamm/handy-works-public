import React from 'react';
import { useNavigate } from "react-router-dom";
import { BsFillArrowRightSquareFill } from 'react-icons/bs';

const AllProduct = ({product}) => {
  const {_id , name, img,price} = product;
  const navigate = useNavigate();
  const productsDetail = _id =>{
      navigate(`/purchase/${_id}`)
  }
  return (

    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
       
        <div className="card-body">
          <figure>
          <img className="h-36 w-36"
            src={img}
            alt="Album"
          />
        </figure>
        
        <h2 className="text-xl text-black  text-center">{name}</h2>
          <p className="text-sm text-center text-black">Price:{price}</p>
          <div className="card-actions justify-center">
            <button onClick={() =>productsDetail(_id)} className="mt-2 p-1 text-white  bg-green-900 flex  ">Details <span className="m-1"> <BsFillArrowRightSquareFill/></span></button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;