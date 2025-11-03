import { useEffect, useRef, useState } from "react";

const slides = [
  { emoji:"🏃‍♀️", title:"Morning Runners", meta:"5:45 AM • Bayside", text:"Pace 9'30\" • 5K • Coffee after" },
  { emoji:"🧘", title:"Sunset Yoga Crew", meta:"Tonight • Waterfront Park", text:"Beginner friendly • Bring a mat" },
  { emoji:"🏋️", title:"Strength Partners", meta:"Anytime • Flex Gym", text:"Push–pull day • Spot each other" },
  { emoji:"🚴", title:"Coastal Cyclists", meta:"Sat 7:00 AM • Pier", text:"25 miles • Social pace" },
];

export default function ActivitySlider(){
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % slides.length), 3500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!trackRef.current) return;
    trackRef.current.scrollTo({ left: trackRef.current.clientWidth * index, behavior: "smooth" });
  }, [index]);

  return (
    <section className="container" style={{padding:"2.5rem 0"}}>
      <h2 className="lead" style={{fontSize:"1.25rem",marginBottom:".75rem"}}>Popular near you</h2>
      <div className="slider">
        <div className="slider-track" ref={trackRef}>
          {slides.map((s,i)=>(
            <article className="slide-card" key={i}>
              <div className="slide-head">
                <div className="slide-emoji">{s.emoji}</div>
                <div>
                  <div className="slide-title">{s.title}</div>
                  <div className="slide-meta">{s.meta}</div>
                </div>
              </div>
              <div className="slide-text">{s.text}</div>
            </article>
          ))}
        </div>
        <div className="slider-dots">
          {slides.map((_,i)=>(
            <button key={i} aria-label={`Go to slide ${i+1}`} className={`dot ${i===index?"dot-active":""}`} onClick={()=>setIndex(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
