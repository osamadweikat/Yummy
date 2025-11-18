import "./about.css";
import SendIcon from "../../images/send-logo.svg";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="reservation-form-container">
          <h6 className="form-title">make a reservation</h6>
          <div className="reservation-form-block">
            <div className="conntact-form">
              <input type="date" className="reservation-date" />
              <input type="time" className="reservation-time" />
              <input
                type="number"
                className="reservation-guests"
                placeholder="Guests (Ex:8)"
              />
              <input
                type="text"
                className="reservation-name"
                placeholder="Name"
              />
              <input
                type="email"
                className="reservation-email"
                placeholder="Email"
              />
              <input
                type="phone"
                className="reservation-phone"
                placeholder="Phone"
              />
              <button>check availability</button>
            </div>
          </div>
        </div>
        <div className="about-info-container">
          <div className="about-info-text">
            <h2 className="about-us">
              about <span>us</span>
            </h2>
            <div className="title-divider" />
            <p>
              <b>
                Fusce laoreet nulla dui, et venenatis massa dictum maximus
                dignissim eget. Donec nec ligula vel augue dapibus dignissim et
                ac eros.
              </b>{" "}
              Proin bibenduquis lacus idm arcu at maximus. Maecenas ac dictum
              lacus, et porta diam. Pellentesque maximus quis lacus id
              varius.Maecenas ac dictum lacus, et porta diam.Maecenas ac dictum
              lacus, et porta diam.{" "}
            </p>
          </div>
          <div className="about-newsletter-block">
            <div className="about-newsletter-form">
              <input type="email" placeholder="Newsletter (Email)" />
              <button className="newsletter-form-button">
                <img src={SendIcon} alt="send-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
