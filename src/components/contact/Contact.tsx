import "./contact.css";
import FacebookLogo from "../../images/facebook-logo.svg";
import TwitterLogo from "../../images/twitter-logo.svg";
import InstagramLogo from "../../images/instagram-logo.svg";
import MapImage from "../../images/map-image.jpg";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="map-container">
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
      <div className="contact-form-container">
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
