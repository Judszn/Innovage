import React from "react";
import "./Navbar.js";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
// import ImageOne from "./assets/img1.jpg";
// import ImageTwo from "./assets/img2.jpg";

function Navbar() {
  return (
    // <div className="relative">
    <div
      id="menuDemo "
      className="bg-transparent top-0 left-0 right-0 mt-[2vh]"
    >
      <div className="menu-icon-wrapper">
        <div className="menu-icon" data-menu="mcmenu">
          <div className="three-line">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div id="mcmenu">
        <ul>
          <li>
            {/* <a href="#">Portfolio</a> */}
            <Link to="/Home" className="cursor-pointer ">
              Home
            </Link>
            <Outlet />
          </li>

          <li>
            <Link to="/Community" className="cursor-pointer ">
              Community
            </Link>
            <Outlet />
          </li>

          <li>
            <Link to="/Events" className="cursor-pointer ">
              Events
            </Link>
            <Outlet />
          </li>
          <li>
            <Link to="/Projects" className="cursor-pointer ">
              Projects
            </Link>
            <Outlet />
            {/* <ul className="dropdown right0">
              <li>
                <a href="#">Nam elementum</a>
              </li>
              <li>
                <a href="#">Magna pharetra</a>
              </li>
              <li>
                <a href="#">Pulvinar mi eget</a>
              </li>
              <li>
                <a href="#">Tincidunt orci</a>
              </li>
              <li>
                <span>
                  <i className="arrow"></i>
                </span>
                <ul className="dropdown right0">
                  <li>
                    <a href="#">Nam elementum</a>
                  </li>
                  <li>
                    <a href="#">Magna pharetra</a>
                  </li>
                  <li>
                    <a href="#">Pulvinar mi eget</a>
                  </li>
                </ul>
              </li>
            </ul> */}
          </li>
          <li>
            <Link to="/Contribute" className="cursor-pointer ">
              Contribute
            </Link>
            <Outlet />
          </li>

          <li>
            <Link to="/Help" className="cursor-pointer ">
              Help
            </Link>
            <Outlet />
          </li>
        </ul>
      </div>
    </div>
    // </div>
  );
}

export default Navbar;
