import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <Link to="/">Home</Link>
      <Link to="/administration">Administration</Link>

      <Link to="/aboutus">About Us</Link>
      <Link to="/services">Services</Link>
      <Link to="/contactus">Contact Us</Link>
    </div>
  );
};
