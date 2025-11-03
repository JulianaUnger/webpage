export default function Footer() {
  const y = new Date().getFullYear();
  return (
    <footer style={{padding:"3rem 0",borderTop:"1px solid var(--hairline)",background:"color-mix(in srgb, var(--c3) 30%, white 70%)"}}>
      <div className="container" style={{display:"grid",gridTemplateColumns:"1.2fr .8fr .8fr .8fr",gap:"1.5rem"}}>
        <div>
          <div style={{fontWeight:800,fontSize:"1.1rem",marginBottom:".6rem",color:"var(--ink)"}}>BeFitFriends</div>
          <p style={{color:"var(--ink-muted)",lineHeight:"1.6"}}>Find your fitness community. Train, match, and make staying active easier.</p>
          <div style={{display:"flex",gap:"12px",marginTop:"10px"}}>
            <a href="#" aria-label="Instagram" style={{display:"grid",placeItems:"center",width:36,height:36,borderRadius:10,background:"#fff",border:"1px solid var(--hairline)"}}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="#1f2e36"/><circle cx="12" cy="12" r="4.5" stroke="#1f2e36"/><circle cx="17.5" cy="6.5" r="1.25" fill="#1f2e36"/></svg>
            </a>
            <a href="#" aria-label="Twitter" style={{display:"grid",placeItems:"center",width:36,height:36,borderRadius:10,background:"#fff",border:"1px solid var(--hairline)"}}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M20.5 7.5c-.7.3-1.5.6-2.3.6.8-.5 1.4-1.2 1.7-2.2-.8.5-1.7.9-2.6 1-1.7-1.9-5-.7-5 2.1 0 .3 0 .6.1.8-3.3-.1-6.2-1.7-8.1-4.1-.4.8-.2 2 .5 2.6-.6 0-1.1-.2-1.6-.4 0 1.5 1 2.8 2.4 3.1-.4.1-.9.2-1.3.1.4 1.3 1.7 2.2 3.1 2.2C5.7 13.9 4.2 14.3 3 14c1.4.9 3 1.4 4.8 1.4 5.8 0 9-5 8.7-9.5.7-.5 1.3-1.1 1.7-1.8z" fill="#1f2e36"/></svg>
            </a>
            <a href="#" aria-label="YouTube" style={{display:"grid",placeItems:"center",width:36,height:36,borderRadius:10,background:"#fff",border:"1px solid var(--hairline)"}}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="3" y="6" width="18" height="12" rx="3" stroke="#1f2e36"/><path d="M11 10l4 2-4 2v-4z" fill="#1f2e36"/></svg>
            </a>
          </div>
        </div>
        <div>
          <div style={{fontWeight:700,marginBottom:10,color:"var(--ink)"}}>Product</div>
          <ul style={{listStyle:"none",padding:0,display:"grid",gap:8,color:"var(--ink-muted)"}}>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#join">Join</a></li>
          </ul>
        </div>
        <div>
          <div style={{fontWeight:700,marginBottom:10,color:"var(--ink)"}}>Company</div>
          <ul style={{listStyle:"none",padding:0,display:"grid",gap:8,color:"var(--ink-muted)"}}>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div>
          <div style={{fontWeight:700,marginBottom:10,color:"var(--ink)"}}>Legal</div>
          <ul style={{listStyle:"none",padding:0,display:"grid",gap:8,color:"var(--ink-muted)"}}>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>
      </div>
      <div className="container" style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1.25rem",color:"var(--ink-muted)"}}>
        <span>© {y} BeFitFriends</span>
        <span>Built with endorphins</span>
      </div>
    </footer>
  );
}
