import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmins";

const Dashbroad = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="dashbroad-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
        <h1 className="text-cyan-500 text-center  mt-20 text-5xl font-bold">
        Dashbroad
      </h1>
         <Outlet></Outlet>
      
        </div>
        <div className="drawer-side">
          <label htmlFor="dashbroad-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {<li>
              <Link to="/dashbroad">My Orders</Link>
            </li>}
            <li>
              <Link to="/dashbroad/review">My Review</Link>
            </li>
            <li>
              <Link to="/dashbroad/profile">My Profile</Link>
            </li>
            {/* { admin &&  */}
            <li>
              <Link to="/dashbroad/users">All Users</Link>
            </li>
          {/* } */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashbroad;
