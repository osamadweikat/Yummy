import "./event.css";
import { events } from "../../types/events.types";
import { useInView } from "../../hooks/useInView";

const Event = () => {
  const { setRef, inViewIndexes } = useInView<HTMLDivElement>();

  return (
    <section className="events-section">
      {events.map((event, index) => (
        <div key={event.id} className="event-container">
          <div className="event-card">
            <div
              className="event-card-front"
              style={{ backgroundImage: `url(${event.backgroundImage})` }}
            >
              <div
                ref={setRef}
                className={`event-text-wrapper ${
                  inViewIndexes.includes(index) ? "fade-in" : ""
                }`}
              >
                <h6
                  className={`event-text ${
                    inViewIndexes.includes(index)
                      ? index % 2 === 0
                        ? "spin-clockwise"
                        : "spin-counter"
                      : ""
                  }`}
                >
                  {event.name}
                </h6>
              </div>
            </div>
            <div className="event-card-back">
              <div className="event-text-wrapper back-text">
                <h6 className="event-text">{event.name}</h6>
              </div>
              <h3 className="event-name">
                {event.name} <span>parties</span>
              </h3>
              <div className="title-divider" />
              <p className="event-details-text">{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Event;
