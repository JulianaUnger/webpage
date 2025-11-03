const people = [
  {
    name: "Matthew Henao",
    role: "Co-Founder • Product & Engineering",
    img: require("../assets/team/matthew.jpg"),
    bio: "Full-stack builder focused on social products and fitness tech.",
    links: { linkedin: "#", x: "#" }
  },
  {
    name: "Juliana Unger",
    role: "Co-Founder • Design & Growth",
    img: require("../assets/team/juliana.jpg"),
    bio: "Design-driven storyteller crafting delightful user journeys.",
    links: { linkedin: "#", x: "#" }
  },
  {
    name: "Scarlett Valencia",
    role: "Co-Founder • Community & Ops",
    img: require("../assets/team/scarlett.jpg"),
    bio: "Community builder who turns ideas into thriving movements.",
    links: { linkedin: "#", x: "#" }
  }
];

export default function Team(){
  return (
    <section id="team" className="container" style={{padding:"70px 0"}}>
      <div style={{textAlign:"center",marginBottom:"24px"}}>
        <h2 style={{fontSize:"clamp(28px,4.5vw,36px)",margin:"0 0 10px"}}>Meet the Team</h2>
        <p className="lead">The people shaping BeFitFriends.</p>
      </div>
      <div className="team-grid">
        {people.map((p, i) => (
          <article key={i} className="team-card">
            <div className="team-photo">
              <img src={p.img} alt={p.name} />
            </div>
            <div className="team-info">
              <div className="team-name">{p.name}</div>
              <div className="team-role">{p.role}</div>
              <p className="team-bio">{p.bio}</p>
              <div className="team-links">
                <a href={p.links.linkedin} aria-label={`${p.name} LinkedIn`}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="#1f2e36"/><path d="M7 10v7M7 7.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM11 17v-5.2c0-.5.4-.8.9-.8 1 0 2.1.9 2.1 2.6V17" stroke="#1f2e36" strokeLinecap="round"/></svg>
                </a>
                <a href={p.links.x} aria-label={`${p.name} X`}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M4 4l16 16M20 4 4 20" stroke="#1f2e36" strokeWidth="2"/></svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
