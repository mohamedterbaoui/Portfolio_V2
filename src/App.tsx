import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import AmbientLight from "./components/widgets/AmbientLight";

function App() {
  return (
    <div className="w-[55%] mx-auto mt-10 ">
      <AmbientLight />
      <Navbar />
      <Hero />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
