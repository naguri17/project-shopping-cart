import React from "react";
import { Link } from "react-router-dom";
import { BsFillHandbagFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <nav className="h-[70px] bg-black flex justify-between items-center px-16 py-10">
      <Link to="/">
        <h2 className="text-white text-[40px] font-semibold ">FreeShop</h2>
      </Link>
      <Link to="/cart">
        <div className="flex items-center justify-center text-white">
          <BsFillHandbagFill className="w-[35px] h-[35px]" />
          <span className="bag-quantity flex justify-center rounded-full font-bold bg-yellow-400 h-[25px] w-[25px] ml-2">
            {cartTotalQuantity}
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default NavBar;
