import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const CustomNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <>
      {/* DESKTOP MENU */}
      <ul className="cust-nav-desktop" style={{ marginBottom: "0" }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Eventlists">Agenda</Link></li>
        {/* <li><Link to="/pricing">Tickets</Link></li> */}
        <li><Link to="/Exhibitors">Exhibitors</Link></li>
        <li><Link to="/Sponsers">Sponsors</Link></li>
        <li><Link to="/Ourgallery">Gallery</Link></li>

        {/* DROPDOWN */}
        <li className="cust-dropdown">
          <button className="cust-dropdown-btn">
            Company <ChevronDown size={16} />
          </button>

          <ul className="cust-dropdown-menu shadow-lg">
            <li><Link to="/Contact">Contact</Link></li>
            {/* <li><Link to="/Ourgallery">Gallery</Link></li> */}
            <li><Link to="/Faq">Faq</Link></li>
            <li><Link to="/Bloglists">Blogs</Link></li>
          </ul>
        </li>
      </ul>

      {/* MOBILE MENU BUTTON */}
      <button className="cust-mobile-toggle" onClick={() => setMobileOpen(true)}>
        <Menu size={32} />
      </button>

      {/* MOBILE OVERLAY */}
      {mobileOpen && <div className="cust-overlay" onClick={() => setMobileOpen(false)}></div>}

      {/* MOBILE PANEL */}
      <div className={`cust-mobile-panel ${mobileOpen ? "cust-open" : ""}`}>
        <div className="cust-mobile-header">
          <button onClick={() => setMobileOpen(false)} className="cust-close-btn">
            <X size={30} />
          </button>
        </div>

        <div className="cust-mobile-list">
          <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/About" onClick={() => setMobileOpen(false)}>About</Link>
          <Link to="/Eventlists" onClick={() => setMobileOpen(false)}>Agenda</Link>
          {/* <Link to="/pricing" onClick={() => setMobileOpen(false)}>Tickets</Link> */}
          <Link to="/Exhibitors" onClick={() => setMobileOpen(false)}>Exhibitors</Link>
          <Link to="/Sponsers" onClick={() => setMobileOpen(false)}>Sponsors</Link>

          {/* MOBILE DROPDOWN */}
          <div className="cust-mobile-dropdown">
            <button
              onClick={() => setCompanyOpen(!companyOpen)}
              className="cust-mobile-dropdown-btn"
            >
              Company <ChevronDown size={16} className={companyOpen ? "rotate" : ""} />
            </button>

            <div className={`cust-mobile-dropdown-menu ${companyOpen ? "cust-show" : ""}`}>
              <Link to="/Contact" onClick={() => setMobileOpen(false)}>Contact</Link>
              <Link to="/Ourgallery" onClick={() => setMobileOpen(false)}>Gallery</Link>
              <Link to="/Faq" onClick={() => setMobileOpen(false)}>Faq</Link>
              <Link to="/Bloglists" onClick={() => setMobileOpen(false)}>Blogs</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomNavbar;
