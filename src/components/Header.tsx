import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { BRAND } from "../config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About" },
    { to: "/services", label: "Pricing" },
    { to: "/contact", label: "Contact" },
  ];
  return (
    <header className="navbar site-header">
      <div className="container header-inner">
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src="/Logo icon - 1 (1).svg" alt="MAVEDO logo" className="logo-img" />
          <span className="logo-text font-heading" style={{ fontSize: '1rem' }}>{BRAND.name}</span>
        </Link>
        <nav className="nav" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end as any} className={({ isActive }) => (isActive ? "active" : "")}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-controls="primary-navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className="header-ctas">
          <Link to="/contact" className="btn btn-secondary btn-sm">Get a Quote</Link>
        </div>
      </div>
      {open && (
        <div className="mobile-menu" id="primary-navigation">
          <nav>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end as any}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
