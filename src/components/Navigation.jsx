import { NavLink } from "react-router-dom";
export function Navigation() {
  const links = [
    {
      path: "/",
      name: "Acceuil",
    },
    {
      path: "/about",
      name: "A propos",
    },
  ];
  return (
    <nav className="navigation">
      <ul>
        {links.map(({ path, name }, index) => (
          <li key={index}>
            <NavLink
              to={path}
              className={(nav) => nav.isActive && "nav-active"}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
