import "./testimonials.css";
import QuoteImage from "../../images/quote.svg";
import { testimonials } from "../../types/testimonials.types";
import { useInView } from "../../hooks/useInView";

const Testimonials = () => {
  const { setRef, inViewIndexes } = useInView<HTMLDivElement>();

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => {
          const [firstName, lastName] = testimonial.name.split(" ");
          const isInView = inViewIndexes.includes(index);

          return (
            <div
              key={testimonial.id}
              ref={setRef}
              className={`testimonials-wrapper ${isInView ? "in-view" : ""}`}
            >
              <img src={testimonial.image} alt="" className="quote-photo" />
              <img src={QuoteImage} alt="" className="quote-sign" />
              <p className="testimonials-quote">{testimonial.quote}</p>
              <h6 className="section-suntitle">{testimonial.jobTitle}</h6>
              <h3 className="quote-name">
                {firstName} <span>{lastName}</span>
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
