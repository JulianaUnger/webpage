export default function Features(){
  return (
    <section id="features" className="section container">
      <h2>Built for active connections</h2>
      <p className="lead">Smarter matching, safer meetups, and effortless planning—so you can spend less time swiping and more time moving.</p>
      <div className="grid-3" style={{marginTop:34}}>
        <div className="feature">
          <div className="icon">🎯</div>
          <h3>Goal-based matching</h3>
          <p className="lead" style={{fontSize:16}}>Match on goals like 5K PR, muscle gain, or mindfulness.</p>
        </div>
        <div className="feature">
          <div className="icon">📅</div>
          <h3>Plan with ease</h3>
          <p className="lead" style={{fontSize:16}}>Share availability, set meetups, and sync your calendar.</p>
        </div>
        <div className="feature">
          <div className="icon">✅</div>
          <h3>Verified activity</h3>
          <p className="lead" style={{fontSize:16}}>Optional verification to build trust around real workouts.</p>
        </div>
      </div>
    </section>
  );
}
