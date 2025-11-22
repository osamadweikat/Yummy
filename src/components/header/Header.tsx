import "./header.css";
import Navbar from "../navbar/Navbar";
import { miniNavbarLinks } from "../../types/nav.types";
import { useInView } from "../../hooks/useInView";
import PhoneIcon from "../../images/phone-white.svg";
import MailIcon from "../../images/mail-white.svg";
import PinIcon from "../../images/pin-white.svg";
import FacebookIcon from "../../images/facebook-logo.svg";
import TwitterIcon from "../../images/twitter-logo.svg";
import InstagramIcon from "../../images/instagram-logo.svg";
import HeaderBg2 from "../../images/header-bg-2.svg";

interface HeaderProps {
  title: string;
  image: string;
}

const contactButtons = [
  { src: PhoneIcon, alt: "phone" },
  { src: MailIcon, alt: "mail" },
  { src: PinIcon, alt: "pin" },
];

const socialButtons = [
  { src: FacebookIcon, alt: "facebook" },
  { src: TwitterIcon, alt: "twitter" },
  { src: InstagramIcon, alt: "instagram" },
];

const Header = ({ title, image }: HeaderProps) => {
  const { setRef, inViewIndexes } = useInView<HTMLElement>();

  const [firstWord, ...restWords] = title.split(" ");
  const secondWord = restWords.join(" ");

  const handleMenuClick = (path: string | number, label: string | number) => {
    const category =
      String(label).toLowerCase() === "all" ? "all" : String(path);
    window.location.href = `/menu/${category}`;
  };

  return (
    <>
      <Navbar />
      <header className="header-section">
        <div className="header-container">
          <div className="header-contact-container">
            {contactButtons.map((btn, idx) => (
              <button key={idx}>
                <img src={btn.src} alt={btn.alt} />
              </button>
            ))}
          </div>
          <div className="header-social-container">
            {socialButtons.map((btn, idx) => (
              <button key={idx}>
                <img src={btn.src} alt={btn.alt} />
              </button>
            ))}
          </div>
          <div className="header-text-container">
            <div className="header-vertical-divider" />
            <div className="header-photo-container">
              <h1
                ref={setRef}
                className={`header-title1 ${
                  inViewIndexes.includes(0) ? "animate-left" : ""
                }`}
              >
                {firstWord}
              </h1>
              <h1
                ref={setRef}
                className={`header-title2 ${
                  inViewIndexes.includes(1) ? "animate-right" : ""
                }`}
              >
                {secondWord}
              </h1>
              <div
                className="header-icon-container"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="header-secondary-image">
                <img src={HeaderBg2} alt="background decoration" />
              </div>
            </div>
            <div className="header-vertical-divider" />
          </div>
          <h6 className="opening-hours-text">
            <span>Opening hours: </span>Mon-Sun, 8am - 10pm
          </h6>
          <h6 className="header-phone-text">
            Make a reservation: <span>+1 917-695-4445</span>
          </h6>
        </div>
        <div className="header-nav-menu-wrapper">
          <div className="color-bullet" />
          <div className="header-menu-list-wrapper">
            <div className="header-menu-list">
              {miniNavbarLinks.slice(2).map((link) => (
                <div key={link.id} className="header-menu-item">
                  <button
                    onClick={() => handleMenuClick(link.path, link.label)}
                  >
                    {link.label}
                  </button>
                  <div className="color-bullet" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
