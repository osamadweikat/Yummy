import "./navbar.css";
import BrandLogo from "../../images/brand-logo.png";
import MenuIcon from "../../images/menu-icon.svg";
import CloseIcon from "../../images/close-icon.svg";
import MiniNavbar from "./MiniNavbar";
import MobileMenuIcon from "../../images/mobile-menu-icon.svg";
import { NavLinks, navLinks, miniNavbarLinks } from "../../types/nav.types";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [openButton, setOpenButton] = useState<"navLinks" | "miniLinks" | null>(
    null
  );
  const [navbarLinks, setNavbarLinks] = useState<NavLinks[]>(miniNavbarLinks);
  const isOpen = openButton !== null;

  useEffect(() => {
    const handleClick = () => {
      setOpenButton(null);
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleMiniOpen = (
    newLinks: NavLinks[],
    buttonId: "navLinks" | "miniLinks"
  ) => {
    if (openButton === buttonId) {
      setOpenButton(null);
      return;
    }

    if (!openButton) {
      setNavbarLinks(newLinks);
      setOpenButton(buttonId);
      return;
    }

    setOpenButton(null);
    setTimeout(() => {
      setNavbarLinks(newLinks);
      setOpenButton(buttonId);
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
              setOpenButton(isOpen ? null : "navLinks");
              setNavbarLinks(miniNavbarLinks);
            }}
            className="navbar-button"
          >
            <div className="icon-wrapper">
              <img
                src={MenuIcon}
                alt="menu-icon"
                className={`icon menu ${
                  openButton === "navLinks" ? "hidden" : "visible"
                }`}
              />
              <img
                src={CloseIcon}
                alt="close-icon"
                className={`icon close ${
                  openButton === "navLinks" ? "visible" : "hidden"
                }`}
              />
            </div>
            <span>yummy menu</span>
          </button>

          <div
            onClick={(e) => {
              e.stopPropagation();
              handleMiniOpen(navLinks, "navLinks");
            }}
            className="navbar-mobile-button"
          >
            <div className="icon-wrapper">
              <img
                src={MobileMenuIcon}
                alt="menu-icon"
                className={`icon menu ${
                  openButton === "navLinks" ? "hidden" : "visible"
                }`}
              />
              <img
                src={CloseIcon}
                alt="close-icon"
                className={`icon close ${
                  openButton === "navLinks" ? "visible" : "hidden"
                }`}
              />
            </div>
          </div>

          <div
            onClick={(e) => {
              e.stopPropagation();
              handleMiniOpen(miniNavbarLinks, "miniLinks");
            }}
            className="navbar-mobile-button"
          >
            <div className="icon-wrapper">
              <img
                src={MenuIcon}
                alt="menu-icon"
                className={`icon menu ${
                  openButton === "miniLinks" ? "hidden" : "visible"
                }`}
              />
              <img
                src={CloseIcon}
                alt="close-icon"
                className={`icon close ${
                  openButton === "miniLinks" ? "visible" : "hidden"
                }`}
              />
            </div>
          </div>
        </div>
      </nav>
      <MiniNavbar isOpen={isOpen} navbarLinks={navbarLinks} />
    </>
  );
};

export default Navbar;
