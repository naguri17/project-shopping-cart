import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ProductDetails from "./components/ProductDetails";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer autoClose={500} />
        <NavBar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/not-found" element={<NotFound />}></Route>
          <Route
            path="/products/:productId"
            element={<ProductDetails />}
          ></Route>
          <Route path="/page" element={<Pagination />}></Route>
          <Route path="*" element={<Navigate to="not-found" />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
