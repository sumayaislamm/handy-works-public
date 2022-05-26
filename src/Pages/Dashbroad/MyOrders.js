import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      const url = `http://localhost:5000/model?person=${user?.email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);

  return (
    <div>
      <h1 className="text-cyan-500 text-center  my-5 text-3xl font-bold">
        Orders{orders.length}
      </h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Avilable</th>
              
            </tr>
          </thead>
          <tbody>
            {
              orders.map((o, index) =><tr>
                <th>{index + 1}</th>
                <th>{o.name}</th>
                <td>{o.minimun}</td>
                <td>{o.avilable}</td>
              </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
