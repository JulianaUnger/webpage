import { useState } from 'react';

export default function Waitlist(){
  const [ok,setOk]=useState(false);
  const submit=e=>{e.preventDefault();setOk(true);e.target.reset();};
  return (
    <section id="waitlist" className="container section">
      <div className="cta-band">
        <div>
          <h3 style={{margin:'0 0 8px',fontSize:28}}>Be first to join BeFitFriends</h3>
          <p style={{margin:0,opacity:.95}}>Enter your email to get launch updates and early access.</p>
        </div>
        <form className="inputs" onSubmit={submit}>
          <input className="input" type="email" placeholder="you@fitnessmail.com" required />
          <button className="btn btn-primary" type="submit">Join waitlist</button>
        </form>
      </div>
      {ok && <p style={{marginTop:10,color:'#065f46',background:'#ecfdf5',padding:'10px 14px',borderRadius:12}}>Thanks! You’re on the list.</p>}
    </section>
  );
}
