import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useGetAllProductsQuery } from "../features/productsApi";
import { PAGE_SIZE } from "../utils/constant";
import CardItem from "./CardItem";
import Category from "./Category";
import Pagination from "./Pagination";

const categoryList = ["All", "Xiaomi", "iPhone", "Samsung", "OnePlus"];

const Home = () => {
  const { data: productData, error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch();
  //variable for pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(categoryList[0]);
  // const [products, setProducts] = useState([]);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // const handleChangeCategory = (category) => {
  //   setSelectedCategory(category);
  //   const currentProducts = productData?.filter(
  //     (item) => category === "All" || item?.category === category
  //   );
  //   setCurrentPage(0);
  //   setProducts(currentProducts);
  // };

  // useEffect(() => {
  //   setProducts(productData);
  // }, [productData]);

  const products = useMemo(() => {
    setCurrentPage(0);
    return productData?.filter(
      (item) =>
        selectedCategory === "All" || item?.category === selectedCategory
    );
  }, [productData, selectedCategory]);

  return (
    <div className="home-container px-16 py-8 pt-[125px]">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error Occured {error.data}</p>
      ) : (
        <>
          <h2 className="text-3xl font-semibold text-center">Products List</h2>
          <Category
            value={selectedCategory}
            // onChange={handleChangeCategory}
            onChange={setSelectedCategory}
            categoryList={categoryList}
          />
          <div className="products grid grid-cols-4 gap-10 items-center justify-between flex-wrap mt-8">
            {products
              ?.slice(
                currentPage * PAGE_SIZE,
                currentPage * PAGE_SIZE + PAGE_SIZE
              )
              ?.map((product) => {
                return (
                  <CardItem
                    key={product?.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                  />
                );
              })}
          </div>
          <Pagination
            currentPage={currentPage}
            productsPerPage={PAGE_SIZE}
            totalProducts={products.length}
            handlePagination={handlePagination}
          />
        </>
      )}
    </div>
  );
};

export default Home;
