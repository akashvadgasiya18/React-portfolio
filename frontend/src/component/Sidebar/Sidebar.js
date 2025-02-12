import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [toggle, SetToggle] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav__logo">
          <span className="logos">A.</span>
        </a>
        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="#home"
                  className="nav_link"
                  onClick={() => SetToggle(false)}
                >
                  <i className="icon-home"></i>
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#about"
                  className="nav_link"
                  onClick={() => SetToggle(false)}
                >
                  <i className="icon-user"></i>
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#skill"
                  className="nav_link"
                  onClick={() => SetToggle(false)}
                >
                  <i className="icon-bulb"></i>
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#service"
                  className="nav_link"
                  onClick={() => SetToggle(false)}
                >
                  <i className="icon-briefcase"></i>
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#education"
                  className="nav_link"
                  onClick={() => SetToggle(false)}
                >
                  <i className="icon-graduation"></i>
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#portfolio"
                  className="nav_link"
                  onClick={() => SetToggle(false)}
                >
                  <i className="icon-note"></i>
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#contact"
                  className="nav_link"
                  onClick={() => SetToggle(false)}
                >
                  <i className="icon-bubble"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <nav className="nav__footer">
          <span className="copyright">&copy; 2023-2024.</span>
        </nav>
      </aside>

      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => SetToggle(!toggle)}
      >
        {toggle ? (
          <i className="icon-close"></i>
        ) : (
          <i className="icon-menu"></i>
        )}
      </div>
    </>
  );
};

export default Sidebar;
