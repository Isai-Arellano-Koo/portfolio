import { useState } from "react";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full p-10 flex backdrop-blur-sm justify-between bg-blue-light text-color-links">
      <div>
        <a href="#home">
          <h1 className="ml-10 text-green font-mono">DEVELOPER</h1>
        </a>
      </div>
      <div className="hidden md:flex">
        <a className="mr-10 font-mono hover:text-white" href="#about">
          <span className="text-green">01. </span>About me
        </a>
        <a className="mr-10 font-mono hover:text-white" href="#experience">
          <span className="text-green">02. </span>Experience
        </a>
        <a className="mr-10 font-mono hover:text-white" href="#projects">
          <span className="text-green">03. </span>Projects
        </a>
        <a className="mr-10 font-mono hover:text-white" href="#contact">
          <span className="text-green">04. </span>Contact
        </a>
      </div>
      <div className="md:hidden">
        <button
          className="block text-3xl text-green p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <a className="block text-green p-2" href="#about">
            About me
          </a>
          <a className="block text-green p-2" href="#experience">
            Experience
          </a>
          <a className="block text-green p-2" href="#projects">
            Projects
          </a>
          <a className="block text-green p-2" href="#contact">
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Nav;
