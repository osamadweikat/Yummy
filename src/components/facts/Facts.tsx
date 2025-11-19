import "./facts.css";
import { factsData } from "../../types/facts.types";
import { useInView } from "../../hooks/useInView";

const Facts = () => {
  const { setRef, inViewIndexes } = useInView<HTMLDivElement>();

  return (
    <section className="facts-section">
      {factsData.map((fact, index) => (
        <div
          key={fact.id}
          className="facts-wrapper"
          style={{ backgroundImage: `url(${fact.backgroundImage})` }}
        >
          <div
            ref={setRef}
            className={`facts-text-wrapper ${
              inViewIndexes.includes(index) ? "fade-in" : ""
            }`}
          >
            <div
              className={`facts-spin-wrapper ${
                inViewIndexes.includes(index)
                  ? index % 2 === 0
                    ? "spin-clockwise"
                    : "spin-counter"
                  : ""
              }`}
            >
              <h3 className="facts-number">{fact.number}k</h3>
              <h6 className="facts-text">{fact.title}</h6>
            </div>
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
