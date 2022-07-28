import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="slogan">We Care For You</span>
      <img src="./img/medical.png" alt="Hospital logo" className="logo"/>
      <Link to="/">Home</Link>
      <Link to="/administration">Administration</Link>
      <Link to="/aboutus">About Us</Link>
      <Link to="/services">Services</Link>
      <Link to="/contactus">Contact Us</Link>
    </div>
  );
};
