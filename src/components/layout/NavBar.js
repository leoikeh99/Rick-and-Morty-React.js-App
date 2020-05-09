import React from "react";
import img from "./img/pngguru.com.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className=" ">
        <div className="nav-container">
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
                <Link to="/">
                  <i className="fas fa-home fa text-secondary"></i>
                </Link>
              </li>
              <li className="">
                <Link to="/about">
                  <i className="fas fa-address-book text-secondary"></i>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
