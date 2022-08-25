import { NavLink } from "react-router-dom";
export function Navigation() {
  return (
    <nav className="navbar">
      <NavLink to="/">Acceuil</NavLink>
      <NavLink to="/about">A propos</NavLink>
    </nav>
  );
}
