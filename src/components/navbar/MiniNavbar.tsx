import "./mini-navbar.css";
import { NavLinks } from "../../types/nav.types";

interface NavbarProps {
  isOpen: boolean;
  navbarLinks: NavLinks[];
}

const MiniNavbar = ({ isOpen, navbarLinks }: NavbarProps) => {
  return (
    <nav className={`mini-navbar-container ${isOpen ? "open" : ""}`}>
      <ul className="mini-navbar-links">
        {navbarLinks.map((link) => (
          <li key={link.id}>{link.label}</li>
        ))}
      </ul>
    </nav>
  );
};

export default MiniNavbar;
