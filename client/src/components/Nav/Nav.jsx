import { useState } from "react";

const Nav = () => {
  const [activeLink, setActiveLink] = useState(""); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (window.innerWidth <= 768) {
      setIsMobileMenuOpen(false);
    }
  };
  return (
    <div className="fixed top-0 w-full p-3 lg:p-10 flex backdrop-blur-sm justify-between bg-blue-light text-color-links items-center">
      <div>
        <a href="#home" onClick={() => handleLinkClick("")}>
          <h1 className="ml-10 mt-2 lg:mt-0 text-green font-mono">DEVELOPER</h1>
        </a>
      </div>
      <div className="hidden md:flex">
        <a className={`mr-10 font-mono ${activeLink === "about" ? "text-green" : "hover:text-white"} `} onClick={() => handleLinkClick("about")} href="#about">
          <span className="text-green">01. </span>About me
        </a>
        <a className={`mr-10 font-mono ${activeLink === "experience" ? "text-green" : "hover:text-white"} `} href="#experience" onClick={() => handleLinkClick("experience")}>
          <span className="text-green">02. </span>Experience
        </a>
        <a className={`mr-10 font-mono ${activeLink === "projects" ? "text-green" : "hover:text-white"} `} href="#projects" onClick={() => handleLinkClick("projects")}>
          <span className="text-green">03. </span>Projects
        </a>
        <a className={`mr-10 font-mono ${activeLink === "contact" ? "text-green" : "hover:text-white"} `} href="#contact" onClick={() => handleLinkClick("contact")}>
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
          <a className={`block font-mono p-2 ${activeLink === "about" ? "text-green" : ""} `} href="#about" onClick={() => handleLinkClick("about")}>
            About me
          </a>
          <a className={`block font-mono p-2 ${activeLink === "experience" ? "text-green" : ""} `} href="#experience" onClick={() => handleLinkClick("experience")}>
            Experience
          </a>
          <a className={`block font-mono p-2 ${activeLink === "projects" ? "text-green" : ""} `} href="#projects" onClick={() => handleLinkClick("projects")}>
            Projects
          </a>
          <a className={`block font-mono p-2 ${activeLink === "contact" ? "text-green" : ""} `} href="#contact" onClick={() => handleLinkClick("contact")}>
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Nav;
