import { NavLink } from "react-router-dom";

export default function Navbar() {
  const links = [
    { path: "/", label: "Home", end: true },
    { path: "/about", label: "About" },
    { path: "/rooms", label: "Rooms" },
    { path: "/bookings", label: "Bookings" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="navbar">
      <NavLink to="/" className="brand">
        Stay<span>Ease.</span>
      </NavLink>

      <nav>
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.end}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}