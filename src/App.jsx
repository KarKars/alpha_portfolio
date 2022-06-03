import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-dark ">
      <Navbar />
      <Bio />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
