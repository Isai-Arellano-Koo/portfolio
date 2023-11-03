
const Nav = () => {
  return (
    <div className="fixed top-0 w-full p-10 flex backdrop-blur-sm justify-between bg-blue-light text-color-links">
      <div>
      <a href="#home">
        <h1 className="ml-10 text-green font-mono">ISAI ARELLANO KOO</h1>
      </a>
       
      </div>
      <div className="hidden block">
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
    </div>
  );
};

export default Nav;
