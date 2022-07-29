import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

export const Login = () => {
  return (
    <div>
      <div>
        <h1 className="admin">Login</h1>

        <Link to="/login/administration">ADMIN</Link>
      </div>
      <Footer />

    </div>
  );
};
