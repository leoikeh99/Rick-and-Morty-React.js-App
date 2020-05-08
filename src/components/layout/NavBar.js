import React from "react";
import img from "./img/pngguru.com.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="p-3">
        <div className="container">
          <div>
            <img src={img} alt="" />
          </div>

          <ul>
            <div className="nav-text">
              <li>
                <Link to="/" className=" text-secondary">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/about" className=" text-secondary">
                  ABOUT
                </Link>
              </li>
            </div>
            <div className="nav-icon">
              <li className="">
                <a href="/">
                  <i className="fas fa-home fa text-secondary"></i>
                </a>
              </li>
              <li className="">
                <a href="/about">
                  <i className="fas fa-address-book text-secondary"></i>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
