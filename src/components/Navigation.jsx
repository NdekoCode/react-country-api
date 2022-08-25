import { Link } from "react-router-dom";
export function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Acceuil</Link>
        </li>
        <li>
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </nav>
  );
}
