import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ product, handleAddToCart }) => {
  const { id, image, name, status, price } = product;

  return (
    <div className="product flex flex-col justify-center w-[300px] max-w-full items-center h-[500px] shadow-lg border-2 rounded-lg">
      <h3 className="text-2xl font-semibold text-center h-16 px-6">{name}</h3>
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt={name}
          className="w-[80%] mt-10 mx-auto h-[250px]"
        />
      </Link>
      <div className="w-[80%] mx-auto details mt-5 text-center flex justify-between">
        <span className="text-green-400">{status}</span>
        <span className="price">${price.toLocaleString()}</span>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        className="bg-cyan-500 w-3/4 border-2 py-2 px-4 rounded-lg flex justify-center mx-auto mt-4 hover:bg-cyan-300 transition
        transform"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default CardItem;
