import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useGetAllProductsQuery } from "../features/productsApi";
import { PAGE_SIZE } from "../utils/constant";
import CardItem from "./CardItem";
import Category from "./Category";
import Pagination from "./Pagination";
import SearchTerm from "./SearchTerm";

const categoryList = ["All", "Xiaomi", "iPhone", "Samsung", "OnePlus"];

const Home = () => {
  const { data: productData, error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch();
  //variable for pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(categoryList[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const products = useMemo(() => {
    const filterData = productData;
    setCurrentPage(0);
    if (Array.isArray(productData)) {
      let results = filterData;
      if (searchTerm?.length > 0) {
        results = results.filter((item) =>
          item?.name?.toLowerCase().includes(searchTerm?.trim()?.toLowerCase())
        );
      }
      if (selectedCategory) {
        results = results.filter(
          (item) =>
            selectedCategory === "All" || item?.category === selectedCategory
        );
      }
      return results;
    }
    return [];
  }, [productData, selectedCategory, searchTerm]);

  return (
    <div className="home-container px-16 py-8 pt-[125px]">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error Occured {error.data}</p>
      ) : (
        <>
          <h2 className="text-3xl font-semibold text-center">Products List</h2>
          <div className="flex -translate-y-14 space-x-16">
            <Category
              value={selectedCategory}
              onChange={setSelectedCategory}
              categoryList={categoryList}
            />
            <SearchTerm setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
          </div>
          <div className="products grid grid-cols-4 gap-10 items-center justify-between flex-wrap">
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
