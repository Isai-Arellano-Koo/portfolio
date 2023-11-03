import React from "react";

const Home = () => {
  return (
    <div className="text-white pt-48 font-mono flex flex-col ml-10 lg:ml-40">
      <h3 className="text-green mb-6">Hello, My name is</h3>
      <h1 className="text-7xl text-white">Isai Arellano Koo</h1>
      <h3 className="text-5xl mt-2 text-color-links font-viet">
        Full Stack Developer
      </h3>
      <p className="mt-20 font-viet text-2xl text-color-links">
        I live in Peru, and I'm passionate about <br /> technology. I'm always
        open and willing to learn <br /> new things and to take advantage of all
        the opportunities <br /> that may arise.
      </p>

      <div className="flex gap-5 mt-10">
        <a href="./Isai_CV.pdf" download className="border-green p-3 border text-green hover:text-color-links hover:border-color-links">
          Download my CV
        </a>
        <a
          href="./Isai_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border-green border p-3 text-green hover:text-color-links hover:border-color-links"
        >
          View my CV
        </a>
      </div>
    </div>
  );
};

export default Home;
