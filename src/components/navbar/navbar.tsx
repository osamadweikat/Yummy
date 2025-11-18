import "./navbar.css";
import BrandLogo from "../../images/brand-logo.png";
import MenuIcon from "../../images/menu-icon.svg";
import CloseIcon from "../../images/close-icon.svg";
import MiniNavbar from "./MiniNavbar";
import MobileMenuIcon from "../../images/mobile-menu-icon.svg";
import { NavLinks, navLinks, miniNavbarLinks } from "../../types/nav.types";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [navbarLinks, setNavbarLinks] = useState<NavLinks[]>([]);

  useEffect(() => {
    const handleClick = () => {
      setIsOpen(false);
      console.log("Mouse clicked, state set to false");
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleMiniOpen = (newLinks: NavLinks[]) => {
    if (!isOpen) {
      setNavbarLinks(newLinks);
      setIsOpen(true);
      return;
    }
    if (navbarLinks === newLinks) {
      setIsOpen(false);
      return;
    }
    setIsOpen(false);

    setTimeout(() => {
      setNavbarLinks(newLinks);
      setIsOpen(true);
    }, 600);
  };

  return (
    <>
      <nav className="navbar-container">
        <div className="barnd-container">
          <img src={BrandLogo} alt="brand-logo" className="brand-logo" />
          <h3 className="brand-text">Yummy</h3>
        </div>
        <div className="nav-menu">
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.id}>{link.label}</li>
            ))}
          </ul>
        </div>
        <div className="navbar-button-wrapper">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="navbar-button"
          >
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
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleMiniOpen(navLinks);
            }}
            className="navbar-mobile-button"
          >
            <img src={MobileMenuIcon} alt="mobile-menu-button" />
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleMiniOpen(miniNavbarLinks);
            }}
            className="navbar-mobile-button"
          >
            <img src={MenuIcon} alt="menu-button" />
          </div>
        </div>
      </nav>
      <MiniNavbar isOpen={isOpen} navbarLinks={navbarLinks} />
    </>
  );
};

export default Navbar;
