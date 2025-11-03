export default function HowItWorks(){
  return (
    <section id="how" className="section container">
      <h2>How it works</h2>
      <p className="lead">Create a profile, set your goals, and discover people nearby with compatible routines and interests.</p>
      <div className="steps">
        <div className="step">
          <h3>Set your vibe</h3>
          <p className="lead" style={{fontSize:16}}>Pick activities, goals, and schedule windows. Choose train, date, or both.</p>
        </div>
        <div className="step">
          <h3>Discover & match</h3>
          <p className="lead" style={{fontSize:16}}>Browse nearby groups and profiles tailored to your fitness level.</p>
        </div>
        <div className="step">
          <h3>Meet & move</h3>
          <p className="lead" style={{fontSize:16}}>Use planning tools to set safe, public meetups and keep momentum.</p>
        </div>
      </div>
    </section>
  );
}
