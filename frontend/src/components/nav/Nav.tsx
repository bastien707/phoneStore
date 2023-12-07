import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="navContainer">
      <ul className="navList">
        <li className="navListItem">
          <Link className="linkButton" to="/">
            Home
          </Link>
        </li>
        <li className="navListItem">
          <Link className="linkButton" to="/products">
            Products
          </Link>
        </li>
        <li className="navListItem">
          <Link className="linkButton" to="/orders">
            Orders
          </Link>
        </li>
      </ul>
    </nav>
  );
}
