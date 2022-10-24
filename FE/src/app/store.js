import { configureStore } from "@reduxjs/toolkit";
import authReducer, { loadUser } from "../features/authSlice";
import cartReducer from "../features/cartSlice";
import { productsApi } from "../features/productsApi";
import productsReducer from "../features/productsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare().concat(productsApi.middleware);
  },
});

store.dispatch(loadUser(null));

export default store;
