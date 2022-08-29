import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../features/productsApi";

const ProductDetails = () => {
  const { data } = useGetAllProductsQuery();

  const { productId } = useParams();

  const checkProduct = data.filter((product) => product.id === productId);
  //   const checkProduct = data.filter((product) => product.id === productId);
  //   console.log(checkProduct);

  console.log(checkProduct.id);

  return <>hihi</>;
};

export default ProductDetails;
