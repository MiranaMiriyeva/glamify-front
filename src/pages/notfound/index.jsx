import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <div className="not_found_page">
      <Helmet>
        <title> NOT FOUND </title>
      </Helmet>
      <img
        src="https://www.maybelline.com/-/media/project/loreal/brand-sites/mny/americas/us/error-pages/error-404.gif?la=en-us&rev=-1&hash=DFD944A64711A7A77D4A98A709C9ED34"
        alt=""
      />
      <div className="not_found_context">
        <h2>PAGE NOT FOUND</h2>
        <p>WHEN IN DOUBT, PUT ON SOME RED LIPSTICK AND… TRY, TRY AGAIN</p>
        <Link to={"/"} className="back_home">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
