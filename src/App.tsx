import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="w-[55%] mx-auto mt-20 ">
      <Navbar />
      <Hero />
      <Education />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
