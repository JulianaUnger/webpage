import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner container">
        <a href="#top" className="brand">BeFitFriends</a>
        <nav className="nav-links">
          <a href="#team">Team</a>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#join" className="btn btn-primary">Join</a>
        </nav>
        <button className="hamburger" aria-label="Menu" onClick={() => setOpen(v => !v)}>
          <span /><span /><span />
        </button>
      </div>
      {open && (
        <div className="mobile-menu container" onClick={() => setOpen(false)}>
          <a href="#team">Team</a>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#join" className="btn btn-primary" style={{display:"inline-block",marginTop:8}}>Join</a>
        </div>
      )}
    </header>
  );
}
