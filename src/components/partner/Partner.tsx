import "./partner.css";
import { Partners } from "../../types/partners.types";

const Partner = () => {
  return (
    <section className="partners-section">
      {Partners.map((partner) => (
        <div key={partner.id} className="partner-logo-wrapper">
          <img src={partner.logo} alt="partner-logo" />
        </div>
      ))}
    </section>
  );
};

export default Partner;
