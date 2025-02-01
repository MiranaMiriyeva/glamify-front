import React from "react";
import "./index.scss";
import Navbar from "../navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
