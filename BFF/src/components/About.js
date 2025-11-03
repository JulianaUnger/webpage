export default function About() {
  return (
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

      {/* This outer is the big box */}
      <div
        style={{
          background: "var(--panel)",
          border: "1px solid var(--hairline)",
          borderRadius: "16px",
          padding: "1.25rem 1.4rem",
          color: "var(--ink-muted)",
          
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
       
        <div style={{ margin: 0 }}>
          At BeFitFriends, our mission is simple — to connect people through
          fitness. We believe that finding someone who shares your energy and
          passion makes staying active easier, and more fun! Whether you love
          running at sunrise, lifting at the gym, hiking new trails, or
          exploring new activities, BeFitFriends helps you match with others who
          share your interests and goals, making every workout a chance to meet
          new friends, stay motivated, and grow stronger together.
        </div>

        
        <div style={{ margin: 0, textAlign: "center", fontWeight: "bold" }}>
          Want to receive early access?
        </div>

        {/* The button/link */}
        <a 
          id="join-btn" 
          href="#waitlist" 
          style={{ 
            background: "#a2c7e9ff",
          }}
        >
          Join the movement!
        </a>
      </div>
    </section>
  );
}