import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="bg-dark">
      <Navbar />
      <Bio />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
