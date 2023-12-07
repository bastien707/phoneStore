import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Order from "./pages/OrderPage/Orders";
import Product from "./pages/ProductPage/Products";
import Nav from "./components/nav/nav";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
