import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <Link to="#">about us</Link>
              </li>
              <li>
                <Link to="#">our services</Link>
              </li>
              <li>
                <Link to="#">privacy policy</Link>
              </li>
              <li>
                <Link to="#">visit website</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <Link to="#">FAQ</Link>
              </li>
              <li>
                <Link to="#">shipping</Link>
              </li>
              <li>
                <Link to="#">returns</Link>
              </li>
              <li>
                <Link to="#">order status</Link>
              </li>
              <li>
                <Link href="#">payment options</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li>
                <Link to="#">download</Link>
              </li>
              <li>
                <Link to="#">changelog</Link>
              </li>
              <li>
                <Link to="#">github</Link>
              </li>
              <li>
                <Link to="#">all version</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <Link
                to="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </Link>
              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
