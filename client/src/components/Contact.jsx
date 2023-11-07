import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope  } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='text-white pt-40 flex flex-col ml-10 lg:ml-48 mr-10 max-w-6xl mb-20'>
      <h2 className="font-mono text-3xl mb-10 ">
        <span className="text-green font-mono">04. </span>Contact me
      </h2>
      <h3 className="text-3xl lg:text-6xl text-color-links font-viet text-center">You can check out more about me and reach out to me through the following platforms:</h3>
      <div className="flex gap-5 justify-center mt-5">
      <div className="my-4">
        <a target="_blank" className="text-8xl hover:text-green" href="https://github.com/Isai-Arellano-Koo">
          <FaGithub /> 
        </a>
      </div>
      <div className="my-4">
        <a target="_blank" className="text-8xl hover:text-green" href="https://www.linkedin.com/in/isai-arellano/">
          <FaLinkedin />
        </a>
      </div>
      <div className="my-4">
        <a target="_blank" className="text-8xl hover:text-green" href="mailto:arko.isai19@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      </div>
      
    </div>
  );
};

export default Contact;
