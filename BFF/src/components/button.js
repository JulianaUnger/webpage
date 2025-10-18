import { useEffect, useState } from "react";

const field = {
  width: "100%",
  padding: ".7rem 0.8rem",
  borderRadius: "0.7rem",
  border: "1px solid #d9e7ea",
};

const pill = {
  display: "inline-flex",
  alignItems: "center",
  gap: ".45rem",
  padding: ".45rem .7rem",
  borderRadius: "999px",
  border: "1px solid #d9e7ea",
  background: "#fff",
};

export default function JoinModal({ open, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skill, setSkill] = useState("Beginner");
  const [activities, setActivities] = useState([]);
  const [other, setOther] = useState("");

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const toggle = (v) =>
    setActivities((xs) => (xs.includes(v) ? xs.filter((x) => x !== v) : [...xs, v]));

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      alert("Please enter your name and email.");
      return;
    }
    const payload = { name, email, skill, activities, other };
    console.log("Join form:", payload);
    alert("Thanks for joining BeFitFriends! We’ll reach out with early access details soon.");
    onClose();
  };

  const opts = [
    "Running",
    "Gym/Weights",
    "Yoga/Pilates",
    "Hiking",
    "Cycling",
    "Swimming",
    "CrossFit",
    "Rock Climbing",
    "Basketball",
    "Tennis",
    "Pickleball",
  ];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.45)",
        display: "grid",
        placeItems: "center",
        padding: "1rem",
        zIndex: 10000,
      }}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        style={{
          width: "min(720px, 100%)",
          background: "#fff",
          color: "#0e1a22",
          borderRadius: "18px",
          border: "1px solid #d9e7ea",
          padding: "1.2rem",
          boxShadow: "0 20px 50px rgba(0,0,0,.18)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 style={{ marginBottom: ".25rem", color: "#86a3be" }}>Join BeFitFriends</h3>
        <p style={{ margin: 0, color: "#1f2e36" }}>
          Want to be part of our <strong>first group</strong> using the app?
          Add your details below to get early access — you’ll always have company for whatever
          activity you enjoy, and it’s a great way to meet new friends.
        </p>

        <form onSubmit={submit} style={{ marginTop: "0.9rem" }}>
          {/* Name + Email */}
          <div style={{ display: "grid", gap: "0.8rem", gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <label>Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Jane Doe"
                style={field}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="jane@example.com"
                style={field}
              />
            </div>
          </div>

          {/* Activities */}
          <div style={{ marginTop: ".9rem" }}>
            <label>Activities you like</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem .8rem", marginTop: ".4rem" }}>
              {opts.map((o) => (
                <label
                  key={o}
                  style={{
                    ...pill,
                    border: activities.includes(o) ? "2px solid #8fbfc2" : pill.border,
                    background: activities.includes(o) ? "#afd7c2" : pill.background,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={activities.includes(o)}
                    onChange={() => toggle(o)}
                  />
                  {o}
                </label>
              ))}
            </div>
          </div>

          {/* Skill + Other */}
          <div style={{ display: "grid", gap: "0.8rem", gridTemplateColumns: "1fr 1fr", marginTop: ".9rem" }}>
            <div>
              <label>Skill level</label>
              <select value={skill} onChange={(e) => setSkill(e.target.value)} style={field}>
                {["Beginner", "Intermediate", "Advanced"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Other activities (optional)</label>
              <input
                value={other}
                onChange={(e) => setOther(e.target.value)}
                placeholder="CrossFit, rowing, dance…"
                style={field}
              />
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: ".6rem", marginTop: "1rem" }}>
            <button
              type="button"
              className="btn"
              onClick={onClose}
              style={{
                background: "#8fbfc2",
                border: "none",
                padding: ".6rem 1.2rem",
                borderRadius: "10px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn"
              style={{
                background: "#86a3be",
                color: "#fff",
                border: "none",
                padding: ".6rem 1.2rem",
                borderRadius: "10px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
