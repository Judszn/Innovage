import React from "react";
import "./Menu.js";
import "./Menu.css";

function Menu() {
  return (
    <div>
      <div id="menuDemo">
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
              <a href="#">Portfolio</a>
            </li>
            <li>
              <span>
                Creative <i className="arrow"></i>
              </span>
              <ul className="dropdown">
                <li>
                  <a href="#">Curabitur</a>
                </li>
                <li>
                  <span>
                    Suspendisse vel <i className="arrow"></i>
                  </span>
                  <ul className="dropdown">
                    <li>
                      <a href="#">Etiam vestibulum</a>
                    </li>
                    <li>
                      <a href="#">Integer efficitur</a>
                    </li>
                    <li>
                      <a href="#">Finibus nibh</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>
                    Eget
                    {/* <img
                      src="mcmenu/img1.jpg"
                      style="margin:10px;width:80px;vertical-align:middle;"
                    /> */}
                    <i className="arrow"></i>
                  </span>
                  <ul className="dropdown">
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
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Studio</a>
            </li>
            <li className="full-width">
              <span>
                Press <i className="arrow"></i>
              </span>
              <div className="dropdown">
                <div className="clm">
                  <h3>Integer</h3>
                  <a href="#">Lacus iaculis</a>
                  <a href="#">Eu tortor</a>
                  <a href="#">Luctus varius</a>
                </div>
                <div className="clm">
                  <h3>Efficitur Viverra</h3>
                  <a href="#">Praesent</a>
                  <h3>At Eros</h3>
                  <a href="#">Pellentesque </a>
                  <a href="#">Dignissim pulvinar</a>
                </div>
                <div className="clm">
                  {/* <a href="#">
                    <img src="mcmenu/img2.jpg" style="width:280px;" />
                  </a> */}
                </div>
              </div>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <span>
                Contact <i className="arrow"></i>
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
                <li>
                  <a href="#">Tincidunt orci</a>
                </li>
                <li>
                  <span>
                    Eget
                    {/* <img
                      src="mcmenu/img1.jpg"
                      style="margin:10px;width:80px;vertical-align:middle;"
                    /> */}
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
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
