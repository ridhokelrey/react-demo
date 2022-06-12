import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { HiMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  });

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="Navbar">
      <div className="Navbar-title">TokoLapak</div>
      <ul className={toggle ? "Navbar-navlink nav-active" : "Navbar-navlink"}>
        <li>
          <NavLink className={({isActive}) => isActive ? 'active-menu': undefined} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive ? 'active-menu': undefined} to="/category">Category</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive ? 'active-menu': undefined} to="/promo">Promo</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive ? 'active-menu': undefined} to="/cart">Cart</NavLink>
        </li>
      </ul>
      <div className="Navbar-burger" onClick={handleClick}>
        <HiMenu />
      </div>
    </div>
  );
}
