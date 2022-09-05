import React from "react";
import { IoMenu } from "react-icons/io5";
import "./navbar.scss";
import { useState } from "react";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const [navbar, setnavbar] = useState(false);
  const showMenu = () => {
    setMenuActive(!menuActive);
  };

  const changeBackgrauond = () => {
    if (window.scrollY >= 80) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackgrauond);
  const menuItems = [
    { id: 1, menu: "home", link: "#home" },
    {
      id: 2,
      menu: "Skills",
      link: "#skills",
    },
    {
      id: 3,
      menu: "Portfolio",
      link: "#portfolio",
    },
    {
      id: 4,
      menu: "Links",
      link: "#Links",
    },
  ];
  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="container navbar__container">
          <div>
            <a href="/" className="navbar__logo">
              JANAR
            </a>
          </div>
          <div>
            <ul className={menuActive ? "menu menu__show" : "menu"}>
              {menuItems.map((menuItem) => {
                return (
                  <li className="menu__item">
                    <a
                      key={menuItem.id}
                      href={menuItem.link}
                      className="menu__link"
                    >
                      {menuItem.menu}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <IoMenu onClick={showMenu} className="navbar__btn" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
