import "./Nav.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navContainer">
      <ul className="navList">
        <li className="navListItem">
          <NavLink
            className={({ isActive }) => ["linkButton", isActive ? "active" : null].filter(Boolean).join(" ")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="navListItem">
          <NavLink
            className={({ isActive }) => ["linkButton", isActive ? "active" : null].filter(Boolean).join(" ")}
            to="/products"
          >
            Products
          </NavLink>
        </li>
        <li className="navListItem">
          <NavLink
            className={({ isActive }) => ["linkButton", isActive ? "active" : null].filter(Boolean).join(" ")}
            to="/orders"
          >
            Orders
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
