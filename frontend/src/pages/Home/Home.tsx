import { Link } from "react-router-dom";
import "./Home.css";
export default function Home() {
  return (
    <div className="homeContainer">
      <header className="homeHeader">
        <h1>Welcome to PhoneStore</h1>
        <p>Your one-stop shop for the latest smartphones and accessories.</p>
      </header>

      <section className="featuredProducts">
        <h2>Featured Products</h2>
        <div className="productList">
          <div className="productItem">
            <img src="path-to-image" alt="Product Name" />
            <h3>Product Name</h3>
            <p>Product Description</p>
            <Link to="/products/product-id" className="viewProductButton">
              View Product
            </Link>
          </div>
        </div>
      </section>

      <section className="aboutUs">
        <h2>About Us</h2>
        <p>
          At PhoneStore, we believe in providing our customers with the best mobile technology on the market. From the
          latest smartphones to essential accessories, we've got everything you need to stay connected.
        </p>
      </section>

      <footer className="homeFooter">
        <p>
          Visit our <Link to="/products">Products</Link> page to browse our full catalog.
        </p>
      </footer>
    </div>
  );
}
