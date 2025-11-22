import "./mini-navbar.css";
import { NavLinks } from "../../types/nav.types";

interface NavbarProps {
  isOpen: boolean;
  navbarLinks: NavLinks[];
  handleClickLink: (link: NavLinks) => void;
}

const MiniNavbar: React.FC<NavbarProps> = ({
  isOpen,
  navbarLinks,
  handleClickLink,
}) => {
  return (
    <nav className={`mini-navbar-container ${isOpen ? "open" : ""}`}>
      <ul className="mini-navbar-links">
        {navbarLinks.map((link) => (
          <li key={link.id} onClick={() => handleClickLink(link)}>
            {link.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MiniNavbar;
