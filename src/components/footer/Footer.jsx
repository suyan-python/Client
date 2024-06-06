import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>

        {/* <ul className="menu">
          <li className="menu__item">
            <NavLink className="menu__link" to="/departments/Civil">
              Civil
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className="menu__link" to="/civil">
              Computer
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className="menu__link" to="/civil">
              Architecture
            </NavLink>
          </li>
        </ul> */}
        <div className="container">
          <div className="text-area">©All Rights Reserved Inc,2081</div>
          <div className="follow-us">
            <div className="title">Contact</div>
            <div className="social-icons">
              <div className="social-icon">Facebook</div>
              <div className="social-icon">Twitter</div>
              <div className="social-icon">GitHub</div>
            </div>
          </div>
        </div>

        <p>@SuyanManAmatya</p>
      </footer>
    </>
  );
}

export default Footer;
