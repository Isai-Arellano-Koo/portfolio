import "./App.css";
import { Route, Routes } from "react-router-dom";
import Experience from "./components/Experience";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home"

function App() {
  return (
    <>
      <Nav />
      <div className="">
      <section id="home">
        <Home/>
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
        <Contact/>
      </section>
      </div>
    </>
  );
}

export default App;
