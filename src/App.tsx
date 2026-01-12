import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";

function App() {
  return (
    <div className="w-[55%] mx-auto mt-20 ">
      <Navbar />
      <Hero />
      <Education />
    </div>
  );
}

export default App;
