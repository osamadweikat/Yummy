import "./contact.css";
import FacebookLogo from "../../images/facebook-logo.svg";
import TwitterLogo from "../../images/twitter-logo.svg";
import InstagramLogo from "../../images/instagram-logo.svg";
import MapImage from "../../images/map-image.jpg";
import { useInView } from "../../hooks/useInView";

const Contact = () => {
    const { setRef, inViewIndexes } = useInView<HTMLElement>();

  return (
    <section className="contact-section">
      <div ref={setRef}
          className={`map-container ${
            inViewIndexes.includes(0) ? "animate-left" : ""
          }`}>
        <div className="contact-social-container">
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
        <div className="map">
          <img src={MapImage} alt="map" />
        </div>
      </div>
      <div ref={setRef}
          className={`contact-form-container ${
            inViewIndexes.includes(1) ? "animate-right" : ""
          }`}>
        <h6>give us a hout</h6>
        <div className="contact-form-block">
          <div className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message" />
            <button>send message</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
