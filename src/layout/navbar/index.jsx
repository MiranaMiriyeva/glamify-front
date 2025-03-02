import React, { useState, useEffect, useContext } from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import AuthContext from "../../context/auth/authContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const { isAuth, isLogin, setIsLogin } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function sweatAlert() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Log Out!",
          icon: "success",
        });
        setIsLogin(false);
      }
    });
  }
  return (
    <>
      <nav className={isScrolled ? "scrolled desktop-nav" : "desktop-nav"}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>

          <h1>GLAMIFY</h1>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
        </ul>
        <div>
          {isLogin ? (
            <TbLogout onClick={() => sweatAlert()} />
          ) : (
            <Link to="/login">
              <FaUserCircle />
            </Link>
          )}

          <Link to="/basket">
            <HiOutlineShoppingBag />
          </Link>
        </div>
      </nav>
      <nav className={isScrolled ? "scrolled mobile-nav" : "mobile-nav"}>
        <ul className={isOpen ? "sidebar sidebar-open" : "sidebar"}>
          <li>
            <Link to="">
              <FaUserCircle />
            </Link>
            <Link to="">
              <HiOutlineShoppingBag />
            </Link>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>

          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
        </ul>
        {isOpen ? (
          <IoCloseSharp
            className="menu-bar-icon"
            onClick={() => setisOpen(false)}
          />
        ) : (
          <RiMenu2Fill
            className="menu-bar-icon"
            onClick={() => setisOpen(true)}
          />
        )}

        <h1>GLAMIFY</h1>
      </nav>
    </>
  );
};

export default Navbar;
