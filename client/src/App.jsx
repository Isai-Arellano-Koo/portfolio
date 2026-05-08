import "./App.css";
import Experience from "./components/Experience";
import Nav from "./components/Nav/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home"
import axios from "axios";
axios.defaults.baseURL = 'https://portfolio-back-isa.up.railway.app'

function App() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-[min(100%,92rem)]">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
