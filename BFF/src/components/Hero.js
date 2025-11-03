export default function Hero({ onJoin }) {
  return (
    <section id="hero">
      <h2>Find your fitness community</h2>
      <button id="join-btn" onClick={onJoin}>Join Now</button>
      <p style={{ marginTop: "1.2rem", fontSize: "1.2rem", fontWeight: "500", color: "#e2e8f0" }}>
        Be the first to use the app!
      </p>
      <p style={{ fontSize: "1.4rem", fontWeight: "700", color: "#427a92ff", marginTop: "0.4rem", textTransform: "uppercase", letterSpacing: "1px" }}>
        Sign up now!
      </p>
    </section>
  );
}
