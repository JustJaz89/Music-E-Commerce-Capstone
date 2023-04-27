import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>JustJazBeats</b>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
            <button onClick={() => navigate("/tracks")}>Tracks</button>
            <button onClick={() => navigate("/search")}>Search</button>
            <button onClick={() => navigate("/contact")}>Contact</button>
            {/* <button onClick={addToCart}>Add to cart</button> */}
            <input type="text" name="search" />
            <a href="#cart">CART (0)</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
