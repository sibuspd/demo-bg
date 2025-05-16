import React from "react";
import Navbar from "./Navbar";
import CartItems from "./CartItems";
import Logo from "./Logo";
import MyOrders from "./MyOrders";
import MyAccount from "./MyAccount";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-50 border-b-2 shadow-sm">
      <div className="flex flex-col md:flex-row gap-6 md:ml-4">
        <Link to={"/"}>
          <Logo />
        </Link>
        <Navbar />
      </div>

      <div className="flex gap-4 font-medium text-sm">
        <h5 className="font-thin">sibuspd@gmail.com</h5>
        <Link to={"/my-orders"}>My Orders</Link>
        <Link to={"/my-account"}>MyAccount</Link>
        <CartItems />
      </div>
    </div>
  );
}

export default Header;
