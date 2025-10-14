import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="hero">
        <h1>Find Your Fitness Community</h1>
        <p>Connect, train, and thrive together with BeFitFriends 💪</p>
        <button className="cta-btn">Join Now</button>
      </section>
      <footer className="footer">
        <p>© 2025 BeFitFriends — All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
