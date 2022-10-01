import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SinglePurchase from "./SinglePurchase";

const Purchase = () => {
  const { purchaseId } = useParams();
  const [purchase, setPurchase] = useState({});
  const [model, setModel] = useState(null);

  useEffect(() => {
    const url = `https://safe-anchorage-57552.herokuapp.com/products/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, [purchaseId]);
  console.log(purchase);

  return (
    <div>
      <div className="card justify-center items-center grid grid-cols-2 gap-10 p-5 lg:card-side bg-base-100 shadow-xl">
      <div className=" bg-green-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={purchase.img} alt="Products pic" className="rounded-xl w-3/12" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-xl lg-text-3xl text-green-500  text-center">
          {purchase.name}
        </h2>
        <p className="text-sm lg:text-xl text-green-500">
          Price:{purchase.price}
        </p>
        <p className="text-sm lg:text-xl text-green-500">
          Stock:{purchase.avilable}
        </p>
        <p className="text-sm lg:text-xl text-green-500">
          Minimum Order:{purchase.minimun}
        </p>
        <div>
        
            <label htmlFor="my-model" onClick={() => setModel(purchase)} className="btn bg-green-900">Order</label>
            {model && <SinglePurchase model={model} setModel={setModel}></SinglePurchase>}
        </div>
      </div>
    </div>
    <div className="card bg-green-100 p-10 shadow-xl">
      <h1>{purchase.description}</h1>
      <Link to="/addproducts" className="btn mx-20 my-32 bg-green-900 ">Give Review</Link>
    </div>
    </div>
    </div>

  );
};

export default Purchase;
