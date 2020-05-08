import React from "react";
import img from "./img/pngguru.com.png";

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
                <a href="/" className=" text-secondary">
                  HOME
                </a>
              </li>
              <li>
                <a href="/about" className=" text-secondary">
                  ABOUT
                </a>
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
