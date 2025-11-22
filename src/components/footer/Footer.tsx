import "./footer.css";
import PinIcon from "../../images/pin-color.svg";
import PhoneIcon from "../../images/phone-color.svg";
import MailIcon from "../../images/mail-color.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="contact-info-wrapper">
        <div className="contact-info-text-wrapper">
          <img src={PinIcon} alt="pin" className="contact-icon" />
          <span>23 yummy blvd, new york, Usa</span>
        </div>
        <div className="contact-info-text-wrapper">
          <img src={MailIcon} alt="mail" className="contact-icon" />
          <span>yummy@tummy.com</span>
        </div>
        <div className="contact-info-text-wrapper">
          <img src={PhoneIcon} alt="phone" className="contact-icon" />
          <span>+1 917-872-9448</span>
        </div>
      </div>
      <div className="footer-navbar">
        <h6 className="footer-text">
          powered by{" "}
          <span>
            <Link to="https://github.com/osamadweikat">osama dweikat</Link>
          </span>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
