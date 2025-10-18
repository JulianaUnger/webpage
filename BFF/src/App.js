import { useState } from "react";
import "./index.css";
import JoinModal from "./components/button"; // modal component

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAV */}
      <nav>
        <h1 style={{ color: "#427a92ff" }}>BeFitFriends</h1>

        
        <ul style={{ listStyle: "none", display: "flex", gap: "1.5rem" }}>
  <li><a href="#about" style={{ color: "#427a92ff", textDecoration: "none" }}>About</a></li>
  <li><a href="#contact" style={{ color: "#427a92ff", textDecoration: "none" }}>Contact</a></li>
</ul>
      </nav>

      {/* HERO */}
      <section id="hero">
        <h2>Find your fitness community</h2>
        <button
          id="join-btn"
          onClick={() => {
            console.log("JOIN clicked");
            setOpen(true);
          }}
        >
          Join Now
        </button>
        <p
    style={{
      marginTop: "1.2rem",
      fontSize: "1.2rem",
      fontWeight: "500",
      color: "#e2e8f0",
    }}
  >
    Be the first to use the app!
  </p>

  <p
    style={{
      fontSize: "1.4rem",
      fontWeight: "700",
      color: "#427a92ff",
      marginTop: "0.4rem",
      textTransform: "uppercase",
      letterSpacing: "1px",
    }}
  >
    Sign up now!
  </p>
      </section>

      {/* ABOUT */}
      <section id="about">
        <h3>About Us</h3>
        
          At <strong>BeFitFriends</strong>, our mission is simple — to connect people through
          fitness. We believe staying active is easier when you have someone by your
          side who shares your energy and passion. Whether you love running at sunrise, lifting at
          the gym, hiking new trails, or joining a yoga class, BeFitFriends helps you find others
          who enjoy the same activities you do.
        
        
          Through personalized profiles, you can match with people based on your fitness interests,
          goals, and skill levels — creating real connections beyond the screen. You’ll always have
          company, no matter what kind of movement you enjoy, and every workout becomes a chance to
          meet new friends, stay motivated, and grow stronger together.
        
      
          Interested in becoming part of our first group to use BeFitFriends? We’d love to have you
          join the movement — your fitness journey starts here!
        
      </section>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2025 BeFitFriends – All rights reserved.</p>
      </footer>

      {/* MODAL */}
      <JoinModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
