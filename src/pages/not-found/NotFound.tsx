import "./not-found.css";

const NotFound = () => {
  return (
    <div className="not-found-section">
      <div className="not-found-container">
        <div className="not-found-text-container">
          <div className="not-found-vertical-divider" />
          <div className="not-found-div-block">
            <span>error 404</span>
            <h1>
              page <span>not</span> found
            </h1>
            <button>go back home</button>
          </div>
          <div className="not-found-vertical-divider" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
