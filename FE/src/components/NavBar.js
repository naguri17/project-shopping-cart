import React, { useEffect } from "react";
import { BsFillHandbagFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { logoutUser } from "../features/authSlice";
import store from "../app/store";
import { getTotal } from "../features/cartSlice";

const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    store.dispatch(getTotal());
  });

  return (
    <nav className="h-[70px] fixed w-full z-10 bg-cyan-400 flex justify-between items-center px-16 py-10">
      <Link to="/">
        <h2 className="text-white text-[40px] font-semibold ">FreeShop</h2>
      </Link>
      {auth._id ? (
        <div class="group inline-block relative">
          <button class="w-[250px] bg-cyan-400 text-white font-semibold py-2 px-4 rounded inline-flex justify-between items-center border-x">
            <span class="text-2xl mr-1">{`Hi ${auth.name}`}</span>
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
          <ul class="absolute w-full hidden text-gray-700 pt-1 group-hover:block">
            <li class="">
              <Link
                class="flex rounded-t bg-gray-100 hover:bg-cyan-500 py-2 px-4 whitespace-no-wrap"
                to="/cart"
              >
                Your Cart
                <BsFillHandbagFill className="w-[20px] h-[20px] translate-x-3" />
                <span className="bag-quantity flex justify-center rounded-full font-bold bg-yellow-400 h-[18px] w-[18px] translate-x-4 translate-y-0.5 text-sm">
                  {cartTotalQuantity}
                </span>
              </Link>
            </li>
            <li class="">
              <Link
                class="rounded-b bg-gray-100 hover:bg-cyan-500 py-2 px-4 block whitespace-no-wrap"
                to="/login"
                onClick={() => {
                  dispatch(logoutUser(null));
                  toast.warning("Logged out!", { position: "bottom-left" });
                }}
              >
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div class="group inline-block relative">
          <button class="bg-cyan-400 text-white font-semibold py-2 px-4 rounded inline-flex justify-between items-center">
            <span class="text-2xl mr-1">Log in / Sign Up</span>
          </button>
          <ul class="absolute w-full hidden text-gray-700 pt-1 group-hover:block">
            <li class="">
              <Link
                class="flex rounded-t bg-gray-100 hover:bg-cyan-500 py-2 px-4 whitespace-no-wrap"
                to="/login"
              >
                Log in
              </Link>
            </li>
            <li class="">
              <Link
                class="rounded-b bg-gray-100 hover:bg-cyan-500 py-2 px-4 block whitespace-no-wrap"
                to="/register"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

// const AuthLinks = styled.div`
//   a {
//     &:last-child {
//       margin-left: 2rem;
//     }
//     color: white;
//     cursor: pointer;
//     font-size: 24px;
//     font-weight: bold;
//   }
// `;

// const Logout = styled.div`
//   color: white;
//   cursor: pointer;
//   font-size: 24px;
//   font-weight: bold;
// `;
