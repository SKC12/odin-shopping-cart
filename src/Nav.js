import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <ul className="nav-links">
        <Link className="nav-router-links" to="/">
          <li>Home</li>
        </Link>
        <Link className="nav-router-links" to="/shop">
          <li>Shop</li>
        </Link>
        <Link className="nav-router-links" to="/cart">
          <li>Cart [{props.cartSize}]</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
