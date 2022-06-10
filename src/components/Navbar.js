import React, { useState } from "react";
import "./Navbar.css";
import { HiMenu } from "react-icons/hi";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="Navbar">
      <div className="Navbar-title">TokoLapak</div>
      <ul className={toggle ? "Navbar-navlink nav-active" : "Navbar-navlink"}>
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
      <div className="Navbar-burger" onClick={handleClick} ><HiMenu /></div>
    </div>
  );
}
