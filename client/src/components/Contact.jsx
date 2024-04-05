import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaEnvelope  } from "react-icons/fa";
import gifJson from '../../Comp 1.json'
import Lottie from "lottie-react"; 

const Contact = () => {
  const [t, i18n] = useTranslation("global")


  return (
    <div className='text-white pt-40 flex flex-col ml-10 lg:ml-48 mr-10 max-w-6xl mb-20'>
      <h2 className="font-mono text-3xl mb-10 ">
        <span className="text-green font-mono">04. {t("nav.contact")} </span>{}
      </h2>
      <h3 className="text-3xl lg:text-6xl text-color-links font-viet text-center">{t("contact.text")}</h3>
      {/* Utiliza el componente Lottie para renderizar la animación */}
      {gifJson && (
        <Lottie
          options={{ animationData: gifJson, loop: true }}
          width={400}
          height={400}
        />
      )}
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
