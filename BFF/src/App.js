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
<section
  id="about"
  style={{
    lineHeight: "1.8",
    fontSize: "1.1rem",
    color: "#1f2e36",
    whiteSpace: "pre-line",
  }}
>
  <h3 style={{ color: "#86a3be", marginBottom: "1rem" }}>About Us</h3>

  At <strong>BeFitFriends</strong>, our mission is simple — to connect people through fitness.
  <br /><br />
  We believe that finding someone who shares your energy and passion makes staying active easier, and more fun!
  <br /><br />
  Whether you love running at sunrise, lifting at the gym, hiking new trails, or exploring new activities, BeFitFriends helps you match with others who share your interests and goals, making every workout a chance to meet new friends, stay motivated, and grow stronger together.
  <br /><br />
  Want to receive early access?
  <br />
  <strong style={{ color: "#86a3be" }}>Join the movement!</strong>
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
