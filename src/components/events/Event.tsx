import "./event.css";
import { events } from "../../types/events.types";

const Event = () => {
  return (
    <section className="events-section">
      {events.map((event) => (
        <div key={event.id} className="event-container">
          <div className="event-card">
            <div
              className="event-card-front"
              style={{ backgroundImage: `url(${event.backgroundImage})` }}
            >
              <div className="event-text-wrapper">
                <h6 className="event-text">{event.name}</h6>
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
