import React from "react";
import { Link } from "react-router-dom";
import {
  FaSquareTwitter,
  FaSquareInstagram,
  FaSquareYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <h4>support</h4>
          <ul>
            <li>New York,USA</li>
            <li>paypal@gmail.com</li>
            <li>9424408254</li>
          </ul>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/donate"}>Donate</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            
            <li>
              <Link to={"/"}>
                {" "}
                <span>
                  <FaSquareTwitter />
                </span>{" "}
                <span>Twitter (X)</span>{" "}
              </Link>
            </li>

            <li>
              <Link to={"/"}>
                {" "}
                <span>
                  <FaSquareInstagram />
                </span>{" "}
                <span>Instagram</span>{" "}
              </Link>
            </li>

            <li>
              <Link to={"/"}>
                {" "}
                <span>
                  <FaSquareYoutube />
                </span>{" "}
                <span>Youtube</span>{" "}
              </Link>
            </li>

            <li>
              <Link to={"/"}>
                {" "}
                <span>
                  <FaLinkedin />
                </span>{" "}
                <span>Linkedin</span>{" "}
              </Link>
            </li>

          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
