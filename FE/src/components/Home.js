import { useGetAllProductsQuery } from "../features/productsApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
import CardItem from "./CardItem";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate.push("/cart");
  };

  return (
    <div className="home-container px-16 py-8">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error Occured {error.data}</p>
      ) : (
        <>
          <h2 className="text-3xl font-semibold text-center">New Arrivals</h2>
          <div className="products flex items-center justify-between flex-wrap mt-8 mx-20">
            {data?.map((product) => {
              return (
                <CardItem product={product} handleAddToCart={handleAddToCart} />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
