import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ActivitySlider from "./components/ActivitySlider";
import About from "./components/About";
import Footer from "./components/footer";
import JoinModal from "./components/button";
import Team from "./components/Team";


export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar />
      <Hero onJoin={() => setOpen(true)} />
      <ActivitySlider />
      <About />
      <Team />
      <Footer />
      <JoinModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
