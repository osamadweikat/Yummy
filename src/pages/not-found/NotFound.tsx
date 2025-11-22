import "./not-found.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-section">
      <div className="not-found-container">
        <div className="not-found-text-container">
          <div className="not-found-vertical-divider" />
          <div className="not-found-div-block">
            <h6>
              error <span>404</span>
            </h6>
            <h1>
              page <span>not</span> found
            </h1>
            <Link to="/">
              <button>go back home</button>
            </Link>
          </div>
          <div className="not-found-vertical-divider" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
