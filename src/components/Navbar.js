import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-title">TokoLapak</div>
      <ul className="Navbar-navlink">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Category</a>
        </li>
        <li>
          <a href="#">Promo</a>
        </li>
        <li>
          <a href="#">Cart</a>
        </li>
      </ul>
      <div className="Navbar-search">
        <input />
        <button>Search</button>
      </div>
    </div>
  );
}
