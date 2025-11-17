import "./navbar.css";
import BrandLogo from "../../images/brand-logo.png";
import MenuIcon from "../../images/menu-icon.svg";
import CloseIcon from "../../images/close-icon.svg";
import MiniNavbar from "./MiniNavbar";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="navbar-container">
        <div className="barnd-container">
          <img src={BrandLogo} alt="brand-logo" className="brand-logo" />
          <h3 className="brand-text">Yummy</h3>
        </div>
        <div className="nav-menu">
          <ul className="navbar-links">
            <li>home</li>
            <li>book a table</li>
            <li>gallery</li>
            <li>house dishes</li>
            <li>events</li>
            <li>contact</li>
          </ul>
        </div>
        <div className="navbar-button-wrapper">
          <button onClick={() => setIsOpen(!isOpen)} className="navbar-button">
            <div className="icon-wrapper">
              <img
                src={MenuIcon}
                alt="menu-icon"
                className={`icon menu ${isOpen ? "hidden" : "visible"}`}
              />
              <img
                src={CloseIcon}
                alt="close-icon"
                className={`icon close ${isOpen ? "visible" : "hidden"}`}
              />
            </div>
            <span>yummy menu</span>
          </button>
        </div>
      </nav>
      <MiniNavbar isOpen={isOpen} />
    </>
  );
};

export default Navbar;
