import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  const [user] = useAuthState(auth);
  // const navigate = useNavigate();
  useEffect(() => {
      const url = `https://safe-anchorage-57552.herokuapp.com/model/${user.email}`;
      fetch(url,  {
        method: 'GET',
        headers:{
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res =>res.json())
        .then(data => {setOrders(data);
        });
   
  }, [user]);

  console.log(orders);


  return (
    <div>
      <h1 className="text-cyan-500 text-center  my-5 text-3xl font-bold">
        Orders{orders.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Avilable</th>
              
            </tr>
          </thead>
          <tbody>
            {
              orders?.map((o, index) =><tr
              key={index}>
                <th>{index + 1}</th>
                <th>{o.model}</th>
                <th>{o.personName}</th>
                <td>{o.person}</td>
                <td>{o.phone}</td>
                <td>{o.address}</td>
                <td>{o.modelavilable}</td>
              </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
