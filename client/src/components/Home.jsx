import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <div className="fixed top-32 right-12 z-10 text-gray-500 hidden lg:block">
        <button
          onClick={() => i18n.changeLanguage("en")}
          className="hover:text-white border p-2 border-green"
        >
          EN
        </button>
        <button
          onClick={() => i18n.changeLanguage("es")}
          className="hover:text-white border p-2 border-green"
        >
          ES
        </button>
      </div>
      <div className="text-white pt-32 lg:pt-48 font-mono flex flex-col ml-10 lg:ml-40">
        <h3 className="text-green mb-6">{t("header.hello")}</h3>
        <h1 className=" text-5xl md:text-7xl text-white">Isai Arellano Koo</h1>
        <h3 className=" text-3xl md:text-5xl mt-2 text-color-links font-viet">
          Full Stack Developer
        </h3>
        <p className="mt-20 font-viet text-xl md:text-2xl max-w-4xl text-color-links">
          {t("header.background")}
        </p>

        <div className="flex gap-5 mt-10">
          <a
            href="./Isai_CV.pdf"
            download
            className="border-green p-3 border text-green hover:text-color-links hover:border-color-links"
          >
            {t("header.buttoms.download")}
          </a>
          <a
            href="./Isai_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-green border p-3 text-green hover:text-color-links hover:border-color-links"
          >
            {t("header.buttoms.view")}
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
