import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SinglePurchase from "./SinglePurchase";

const Purchase = () => {
  const { purchaseId } = useParams();
  const [purchase, setPurchase] = useState({});
  const [model, setModel] = useState(null);

  useEffect(() => {
    const url = `https://safe-anchorage-57552.herokuapp.com/product/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, [purchaseId]);
  console.log(purchase);

  return (
    <div>
      <div className="card justify-center items-center p-5 lg:card-side bg-base-100 shadow-xl">
      <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={purchase.img} alt="Shoes" className="rounded-xl w-3/12" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-xl lg-text-3xl text-cyan-500  text-center">
          {purchase.name}
        </h2>
        <p className="text-sm lg:text-xl text-cyan-500">
          Price:{purchase.price}
        </p>
        <p className="text-sm lg:text-xl text-cyan-500">
          Stock:{purchase.avilable}
        </p>
        <p className="text-sm lg:text-xl text-cyan-500">
          Minimum Order:{purchase.minimun}
        </p>
        <div className="card-actions">
        
            <label htmlFor="my-model" onClick={() => setModel(purchase)} className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 ">Order</label>
            {model && <SinglePurchase model={model} setModel={setModel}></SinglePurchase>}
        </div>
      </div>
    </div>
    </div>
    </div>

  );
};

export default Purchase;
