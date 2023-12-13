import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="pageContainer">
      <header className="homeHeader">
        <h1>Welcome to PhoneStore</h1>
        <p>Your one-stop shop for the latest smartphones and accessories.</p>
      </header>

      <section className="featuredProducts">
        <h2>Featured Products</h2>
        <div className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img className="gallery__img" src="img/home_phone_1.avif" alt="placeholder" />
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img className="gallery__img" src="img/home_phone_2.avif" alt="placeholder" />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img className="gallery__img" src="img/home_phone_3.avif" alt="placeholder" />
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img className="gallery__img" src="img/home_phone_4.avif" alt="placeholder" />
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img className="gallery__img" src="img/home_phone_5.avif" alt="placeholder" />
          </figure>
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
