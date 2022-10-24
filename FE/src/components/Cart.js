import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  removeFromCart,
  decreaseCart,
  addToCart,
  clearCart,
  getTotal,
} from "../features/cartSlice";
import { useEffect } from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleIncreaseCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container px-16 py-8">
      <h2 className="text-3xl font-semibold text-center">Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <p>Your cart is currently empty</p>
          <div className="homepage">
            <Link
              to="/"
              className="flex gap-3 mt-2 text-gray-400 hover:text-black -translate-x-1"
            >
              <AiOutlineArrowLeft className="w-[20px] h-[20px]" />
              <span className="-translate-y-[2px]">Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="translate-y-4">
          <div className="titles my-4 ml-4 text-[14px] font-semibold uppercase">
            <h3 className="title pl-4">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total pl-2">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems?.map((cartItem) => (
              <div className="cart-item border-t-2 py-6" key={cartItem.id}>
                <div className="cart-product flex translate-x-5">
                  <img
                    src={cartItem.image}
                    alt={cartItem.name}
                    className="w-[100px] h-full mr-4"
                  />
                  <div className="font-normal">
                    <h3>{cartItem.name}</h3>
                    <h3>{cartItem.desc}</h3>
                    <button
                      className="mt-[0.7rem] cursor-pointer text-gray-400 hover:text-black"
                      onClick={() => handleRemoveFromCart(cartItem)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="product-price translate-x-2">
                  ${cartItem.price}
                </div>
                <div className="cart-quantity flex items-center justify-center gap-2 w-[130px] max-w-full border-2 border-gray-200 rounded-lg -translate-x-5">
                  <button onClick={() => handleDecreaseCart(cartItem)}>
                    -
                  </button>
                  <div className="count px-4 mx-2 translate-y-[1.5px]">
                    {cartItem.cartQuantity}
                  </div>
                  <button onClick={() => handleIncreaseCart(cartItem)}>
                    +
                  </button>
                </div>
                <div className="cart-total-price pr-3 translate-x-3">
                  ${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </div>
          <div className="clear-cart flex justify-between items-start border-t-2 pt-8">
            <button
              className="clear-button w-[130px] h-10 rounded-lg border-2 text-gray-600 cursor-pointer hover:bg-gray-200"
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
            <div className="checkout">
              <div className="subtotal flex justify-between text-[20px]">
                <span>Subtotal</span>
                <span className="amount font-bold">
                  ${cart.cartTotalAmount}
                </span>
              </div>
              <p className="text-[14px] font-light my-2">
                Taxes and shipping calculated at checkout
              </p>
              {auth._id ? (
                <button
                  className="w-full h-10 rounded-lg border-2 text-white cursor-pointer bg-cyan-600 hover:bg-cyan-400
                "
                >
                  Check out{" "}
                </button>
              ) : (
                <button
                  className="w-full h-10 rounded-lg border-2 text-white cursor-pointer bg-yellow-400 hover:bg-yellow-600
                "
                  onClick={() => navigate("/login")}
                >
                  Login to Check out
                </button>
              )}
              <div className="homepage">
                <Link
                  to="/"
                  className="flex gap-3 mt-4 text-gray-400 hover:text-black"
                >
                  <AiOutlineArrowLeft className="w-[20px] h-[20px]" />
                  <span className="-translate-y-[2px]">Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
