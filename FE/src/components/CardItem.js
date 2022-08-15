import React from "react";

const CardItem = ({ product, handleAddToCart }) => {
  const { id, image, name, desc, price } = product;

  return (
    <div
      key={id}
      className="product flex flex-col justify-center w-[300px] max-w-full items-center h-[500px] shadow-lg border-2 rounded-lg"
    >
      <h3 className="text-2xl font-semibold text-center h-16">{name}</h3>
      <img src={image} alt={name} className="w-[80%] mt-10 mx-auto h-[200px]" />
      <div className="w-[80%] mx-auto details mt-5 text-center flex justify-between">
        <span>{desc}</span>
        <span className="price">${price}</span>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        className="bg-cyan-500 w-3/4 border-2 py-2 px-4 rounded-lg flex justify-center mx-auto mt-4 hover:bg-cyan-300"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default CardItem;
