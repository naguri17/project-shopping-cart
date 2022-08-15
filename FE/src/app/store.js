import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { productsFetch } from "../features/productsSlice";
import { productsApi } from "../features/productsApi";
import cartReducer, { getTotal } from "../features/cartSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare().concat(productsApi.middleware);
  },
});

store.dispatch(productsFetch());

store.dispatch(getTotal());

export default store;
