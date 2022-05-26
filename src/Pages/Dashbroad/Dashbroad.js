import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashbroad = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="dashbroad-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
        <h1 className="text-cyan-500 text-center  mt-20 text-5xl font-bold">
        Dashbroad
      </h1>
         <Outlet></Outlet>
      
        </div>
        <div class="drawer-side">
          <label for="dashbroad-sidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashbroad">My Orders</Link>
            </li>
            <li>
              <Link to="/dashbroad/review">My Review</Link>
            </li>
            <li>
              <Link to="/dashbroad/profile">My Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashbroad;
