import "./mini-navbar.css";

interface NavbarProps {
  isOpen: boolean;
}

const MiniNavbar = ({ isOpen }: NavbarProps) => {
  return (
    <nav className={`mini-navbar-container ${isOpen ? "open" : ""}`}>
      <ul className="mini-navbar-links">
        <li>all</li>
        <li>hous dishes</li>
        <li>soups</li>
        <li>pizzas</li>
        <li>pastas</li>
        <li>salads</li>
        <li>desert</li>
        <li>drinks</li>
      </ul>
    </nav>
  );
};

export default MiniNavbar;
