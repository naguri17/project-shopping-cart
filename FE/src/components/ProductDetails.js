import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../features/productsApi";
import { GiShoppingCart } from "react-icons/gi";
import { addToCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const { data } = useGetAllProductsQuery();

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const { productId } = useParams();

  const dispatch = useDispatch();

  const selectedProduct = data?.find(
    (product) => parseInt(product.id) === parseInt(productId)
  );

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  console.log(selectedProduct);

  // return (
  //   <div className="py-8 px-4 translate-y-[125px] m-auto flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl">
  //     <img
  //       class="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg w-[120px] h-[120px]"
  //       src={selectedProduct?.image}
  //       alt={selectedProduct?.name}
  //     />
  //     <div class="flex flex-col justify-between p-4 leading-normal">
  //       <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
  //         {selectedProduct?.name}
  //       </h5>
  //       <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
  //         {selectedProduct?.details}
  //       </p>
  //     </div>
  //   </div>
  // );
  return (
    <div className="md:flex translate-y-[100px] items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden border-r-2">
        <img
          className="w-[350px] h-[450px]"
          alt={selectedProduct?.name}
          src={selectedProduct?.image}
        />
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6 pl-20">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-gray-600">
            Brand: {selectedProduct?.category}
          </p>
          <h1
            className="
          lg:text-2xl
          text-xl
          font-semibold
          lg:leading-6
          leading-7
          text-gray-800
          mt-2
        "
          >
            {selectedProduct?.name}
          </h1>
        </div>

        <div className="py-4 pl-10 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800">Size</p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600 mr-3">6.67"</p>
            <svg
              className="cursor-pointer"
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L1 9"
                stroke="#4B5563"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <button
          className="
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400
        text-base
        flex
        items-center
        justify-center
        leading-none
        text-white
        bg-cyan-500
        w-full
        py-4
        hover:bg-cyan-300
        gap-3
        rounded-lg
        transition
        transform
      "
          onClick={() => handleAddToCart(selectedProduct)}
        >
          <GiShoppingCart fontSize={"20px"} />
          Add to your cart
        </button>
        <div>
          <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
            {selectedProduct?.details}
          </p>
        </div>
        <div>
          <div className="border-t border-b py-4 mt-7 border-gray-200">
            <div
              onClick={() => setShow(!show)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-base leading-4 text-gray-800">
                Shipping and returns
              </p>
              <button
                className="
              cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
              rounded
            "
                aria-label="show or hide"
              >
                <svg
                  className={"transform " + (show ? "rotate-180" : "rotate-0")}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                (show ? "block" : "hidden")
              }
              id="sect"
            >
              You will be responsible for paying for your own shipping costs for
              returning your item. Shipping costs are nonrefundable
            </div>
          </div>
        </div>
        <div>
          <div className="border-b py-4 border-gray-200">
            <div
              onClick={() => setShow2(!show2)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-base leading-4 text-gray-800">Contact us</p>
              <button
                className="
              cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
              rounded
            "
                aria-label="show or hide"
              >
                <svg
                  className={"transform " + (show2 ? "rotate-180" : "rotate-0")}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                (show2 ? "block" : "hidden")
              }
              id="sect"
            >
              If you have any questions on how to return your item to us,
              contact us.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
