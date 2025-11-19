import "./facts.css";
import { factsData } from "../../types/facts.types";

const Facts = () => {
  return (
    <section className="facts-section">
      {factsData.map((fact) => (
        <div
          key={fact.id}
          className="facts-wrapper"
          style={{ backgroundImage: `url(${fact.backgroundImage})` }}
        >
          <div className="facts-text-wrapper">
            <h3 className="facts-number">{fact.number}k</h3>
            <h6 className="facts-text">{fact.title}</h6>
          </div>
          <div className="facts-photo-wrapper">
            <img src={fact.icon} alt="" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Facts;
