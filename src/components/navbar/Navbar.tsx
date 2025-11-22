import "./navbar.css";
import BrandLogo from "../../images/brand-logo.png";
import MenuIcon from "../../images/menu-icon.svg";
import CloseIcon from "../../images/close-icon.svg";
import MiniNavbar from "./MiniNavbar";
import MobileMenuIcon from "../../images/mobile-menu-icon.svg";
import { NavLinks, navLinks, miniNavbarLinks } from "../../types/nav.types";
import { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

type OpenButtonType = "navLinks" | "miniLinks" | null;

const Navbar = () => {
  const [openButton, setOpenButton] = useState<OpenButtonType>(null);
  const [navbarLinks, setNavbarLinks] = useState<NavLinks[]>(miniNavbarLinks);
  const isOpen = openButton !== null;

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = () => setOpenButton(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleClickLink = (link: NavLinks) => {
    if (typeof link.path === "number") {
      if (location.pathname === "/") {
        const state = { scrollToIndex: link.path };
        navigate("/", { state });
      } else {
        navigate("/", { state: { scrollToIndex: link.path } });
      }
    } else {
      window.location.href = `/menu/${link.path}`;
    }
    setOpenButton(null);
  };

  const handleClickLogo = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (location.pathname === "/") {
      window.scrollTo(0, 0);
      window.location.reload();
    } else {
      window.location.href = "/";
    }
  };

  const handleMiniOpen = (newLinks: NavLinks[], buttonId: OpenButtonType) => {
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
        <Link to="/">
          <div className="barnd-container" onClick={handleClickLogo}>
            <img src={BrandLogo} alt="brand-logo" className="brand-logo" />
            <h3 className="brand-text">Yummy</h3>
          </div>
        </Link>
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.id} onClick={() => handleClickLink(link)}>
              {link.label}
            </li>
          ))}
        </ul>

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
          {[
            { links: navLinks, type: "navLinks" },
            { links: miniNavbarLinks, type: "miniLinks" },
          ].map(({ links, type }) => (
            <div
              key={type}
              onClick={(e) => {
                e.stopPropagation();
                handleMiniOpen(links, type as OpenButtonType);
              }}
              className="navbar-mobile-button"
            >
              <div className="icon-wrapper">
                <img
                  src={type === "navLinks" ? MobileMenuIcon : MenuIcon}
                  alt="menu-icon"
                  className={`icon menu ${
                    openButton === type ? "hidden" : "visible"
                  }`}
                />
                <img
                  src={CloseIcon}
                  alt="close-icon"
                  className={`icon close ${
                    openButton === type ? "visible" : "hidden"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </nav>
      <MiniNavbar
        isOpen={isOpen}
        navbarLinks={navbarLinks}
        handleClickLink={handleClickLink}
      />
    </>
  );
};

export default Navbar;
