import "./header.css";
import PhoneWhite from "../../images/phone-white.svg";
import MailWhite from "../../images/mail-white.svg";
import PinWhite from "../../images/pin-white.svg";
import FacebookLogo from "../../images/facebook-logo.svg";
import TwitterLogo from "../../images/twitter-logo.svg";
import InstagramLogo from "../../images/instagram-logo.svg";
import HeaderBg2 from "../../images/header-bg-2.svg";
import { miniNavbarLinks } from "../../types/nav.types";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <header className="header-section">
      <Navbar />
      <div className="header-container">
        <div className="header-contact-container">
          <button>
            <img src={PhoneWhite} alt="phone" />
          </button>
          <button>
            <img src={MailWhite} alt="mail" />
          </button>
          <button>
            <img src={PinWhite} alt="pin" />
          </button>
        </div>
        <div className="header-social-container">
          <button>
            <img src={FacebookLogo} alt="facebook" />
          </button>
          <button>
            <img src={TwitterLogo} alt="twitter" />
          </button>
          <button>
            <img src={InstagramLogo} alt="instagram" />
          </button>
        </div>
        <div className="header-text-container">
          <div className="header-vertical-divider" />
          <div className="header-photo-container">
            <h1 className="header-title1">yummy</h1>
            <h1 className="header-title2">tummy</h1>
            <div className="header-icon-container" />
            <div className="header-secondary-image">
              <img src={HeaderBg2} alt="" />
            </div>
          </div>
          <div className="header-vertical-divider" />
        </div>
        <h6 className="opening-hours-text">
          <span>opening hours: </span>mon-sun, 8am - 10pm{" "}
        </h6>
        <h6 className="header-phone-text">
          make a reservation: <span>+1 917-695-4445</span>
        </h6>
      </div>
      <div className="header-nav-menu-wrapper">
        <div className="color-bullet" />
        <div className="header-menu-list-wrapper">
          <div className="header-menu-list">
            {miniNavbarLinks.slice(2).map((link) => (
              <div className="header-menu-item">
                <button key={link.id}>{link.label}</button>
                <div className="color-bullet" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
