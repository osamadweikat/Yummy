import "./navbar.css";
import BrandLogo from "../../images/brand-logo.png";
import MenuIcon from "../../images/menu-icon.svg";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="barnd-conatiner">
        <img src={BrandLogo} alt="brand-logo" className="brand-logo" />
        <h3 className="brand-text">Yummy</h3>
      </div>
      <div className="nav-menu">
        <ul className="navbar-links">
          <li>home</li>
          <li>book a table</li>
          <li>gallery</li>
          <li>house dishes</li>
          <li>events</li>
          <li>contact</li>
        </ul>
      </div>
      <div className="navbar-button-wrapper">
        <button className="navbar-button">
          <img src={MenuIcon} alt="menu-icon" />
          <span>yummy menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
