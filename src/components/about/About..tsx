import "./about.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="reservation-form-container">
          <h6 className="form-title">make a reservation</h6>
          <div className="reservation-form-block">
            <div className="conntact-form">
              <input
                type="text"
                className="reservation-date"
                placeholder="Date (dd/mm)"
              />
              <input
                type="text"
                className="reservation-time"
                placeholder="Time (hh/mm)"
              />
              <input
                type="number"
                className="reservation-guests"
                placeholder="Guests (Ex:8)"
                min={1}
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
                type="number"
                className="reservation-phone"
                placeholder="Phone"
              />
              <button>check availability</button>
            </div>
          </div>
        </div>
        <div className="about-info-container">
          <div className="about-info-text">
            <h2 className="about-us-title">
              about <span>us</span>
            </h2>
            <div className="title-divider" />
            <p>
              <b>
                Welcome to <span>Yummy Restaurant</span> where flavor meets
                passion! Our mission is to provide a memorable dining experience
                with fresh, high-quality ingredients and dishes crafted with
                love.
              </b>
              <br />
              <br />
              From classic favorites to unique culinary creations, we cater to
              all tastes and occasions. Whether you're here for a quick bite, a
              family dinner, or a special celebration, our friendly staff
              ensures you feel right at home. Come and taste the difference!
            </p>
          </div>
          <div className="about-newsletter-block">
            <div className="about-newsletter-form">
              <input type="email" placeholder="Newsletter Email)" />
              <button className="newsletter-form-button" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;