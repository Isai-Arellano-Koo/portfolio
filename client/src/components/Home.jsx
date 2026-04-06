import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const FULL_NAME = "Isai Arellano Koo";

const Home = () => {
  const [t, i18n] = useTranslation("global");
  const [displayedName, setDisplayedName] = useState("");
  const timeoutRef = useRef(null);

  useEffect(() => {
    let index = 0;
    let cancelled = false;

    const typeNext = () => {
      if (cancelled || index >= FULL_NAME.length) return;
      const char = FULL_NAME[index];
      const delay = char === " " ? 130 : 45 + Math.random() * 75;
      timeoutRef.current = window.setTimeout(() => {
        if (cancelled) return;
        index += 1;
        setDisplayedName(FULL_NAME.slice(0, index));
        typeNext();
      }, delay);
    };

    typeNext();

    return () => {
      cancelled = true;
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="fixed top-32 right-12 z-10 text-gray-500 hidden lg:block">
        <button
          onClick={() => i18n.changeLanguage("en")}
          className="rounded border border-green p-2 transition-colors duration-200 hover:border-color-links hover:text-white"
        >
          EN
        </button>
        <button
          onClick={() => i18n.changeLanguage("es")}
          className="rounded border border-green p-2 transition-colors duration-200 hover:border-color-links hover:text-white"
        >
          ES
        </button>
      </div>
      <div className="text-white pt-32 lg:pt-48 font-mono flex flex-col ml-10 lg:ml-40">
        <h3 className="text-green mb-6">{t("header.hello")}</h3>
        <h1
          className="text-5xl md:text-7xl text-white min-h-[2.75rem] md:min-h-[4.5rem]"
          aria-label={FULL_NAME}
        >
          <span aria-hidden="true">{displayedName}</span>
          <span className="typewriter-cursor" aria-hidden="true" />
        </h1>
        <h3 className=" text-3xl md:text-5xl mt-2 text-color-links font-viet">
          Full Stack Developer
        </h3>
        <p className="mt-20 font-viet text-xl md:text-2xl max-w-4xl text-color-links">
          {t("header.background")}
        </p>

        <div className="flex gap-5 mt-10">
          <a
            href="./Isai_Arellano_CV.pdf"
            download
            className="border border-green p-3 text-green transition-colors duration-200 hover:border-color-links hover:text-color-links"
          >
            {t("header.buttoms.download")}
          </a>
          <a
            href="./Isai_Arellano_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-green p-3 text-green transition-colors duration-200 hover:border-color-links hover:text-color-links"
          >
            {t("header.buttoms.view")}
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
