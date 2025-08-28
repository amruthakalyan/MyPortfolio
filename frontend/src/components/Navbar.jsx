// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';


// export default function Navbar(){
// const loc = useLocation();
// return (
// <nav className="nav">
// <div className="brand">My Portfolio</div>
// <div className="links">
// <Link className={loc.pathname==='/'? 'active':''} to="/">Home</Link>
// <Link to="/projects">Projects</Link>
// <Link to="/resume">Resume</Link>
// <Link to="/contact">Contact</Link>
// </div>
// </nav>
// );
// }




import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // install react-icons

export default function Navbar() {
  const loc = useLocation();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="nav">
      <div className="brand">My Portfolio</div>

      {/* Desktop Links */}
      <div className="links desktop">
        <Link
          className={loc.pathname === "/" ? "active" : ""}
          to="/"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          className={loc.pathname === "/projects" ? "active" : ""}
          to="/projects"
          onClick={closeMenu}
        >
          Projects
        </Link>
        <Link
          className={loc.pathname === "/resume" ? "active" : ""}
          to="/resume"
          onClick={closeMenu}
        >
          Resume
        </Link>
        <Link
          className={loc.pathname === "/contact" ? "active" : ""}
          to="/contact"
          onClick={closeMenu}
        >
          Contact
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="hamburger" onClick={toggleMenu}>
        {open ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/projects" onClick={closeMenu}>
            Projects
          </Link>
          <Link to="/resume" onClick={closeMenu}>
            Resume
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
