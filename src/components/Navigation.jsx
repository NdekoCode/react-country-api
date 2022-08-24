import { Link } from "react-router-dom";
export function Navigation() {
  return (
    <nav className="navbar">
      <Link to="/">Acceuil</Link>
      <Link to="/about">A propos</Link>
    </nav>
  );
}
