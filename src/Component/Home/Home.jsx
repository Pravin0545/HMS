import React from "react";
import { Link } from "react-router-dom";
// import { Administration } from "../Administration/Administration";

export const Home = () => {
  return (
    <div>
      Home
      <Link to="/administration">Administration</Link>
      {/* <Administration /> */}
    </div>
  );
};
