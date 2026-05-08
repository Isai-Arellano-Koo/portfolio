import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const FULL_NAME = "Isai Arellano Koo";
const TYPE_INTERVAL_MS = 78;

const Home = () => {
  const [t, i18n] = useTranslation("global");
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    setTypedName("");
    let cancelled = false;
    let timeoutId;

    const typeNext = (index) => {
      if (cancelled) return;
      if (index > FULL_NAME.length) return;
      setTypedName(FULL_NAME.slice(0, index));
      if (index < FULL_NAME.length) {
        timeoutId = window.setTimeout(() => typeNext(index + 1), TYPE_INTERVAL_MS);
      }
    };

    timeoutId = window.setTimeout(() => typeNext(1), 400);
    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="fixed right-6 top-28 z-20 hidden gap-1 rounded-lg border border-white/10 bg-blue-primary/85 p-1 backdrop-blur-md shadow-card sm:right-10 lg:flex lg:right-12">
        <button
          type="button"
          onClick={() => i18n.changeLanguage("en")}
          className={`rounded-md px-3 py-1.5 font-mono text-xs transition-colors ${
            i18n.language === "en"
              ? "bg-green/15 text-green"
              : "text-gray-400 hover:text-white"
          }`}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => i18n.changeLanguage("es")}
          className={`rounded-md px-3 py-1.5 font-mono text-xs transition-colors ${
            i18n.language === "es"
              ? "bg-green/15 text-green"
              : "text-gray-400 hover:text-white"
          }`}
        >
          ES
        </button>
      </div>
      <div className="layout-content relative flex max-w-4xl flex-col items-start pb-20 pt-32 font-mono lg:max-w-5xl lg:pt-44 xl:pt-48">
        <p className="mb-4 font-mono text-sm tracking-widest text-green md:text-base">
          {t("header.hello")}
        </p>
        <h1
          className="min-h-[1.15em] text-4xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl"
          aria-label={FULL_NAME}
        >
          <span className="inline-block">{typedName}</span>
          <span
            className="ml-0.5 inline-block h-[0.9em] w-0.5 translate-y-px bg-green animate-blink sm:ml-1 sm:h-[0.85em] sm:w-[3px]"
            aria-hidden
          />
        </h1>
        <h2 className="mt-3 font-viet text-2xl text-color-links/95 sm:text-4xl md:mt-4 md:text-5xl">
          Full Stack Developer
        </h2>
        <p className="mt-12 max-w-2xl font-viet text-lg leading-relaxed text-color-links/90 md:text-xl md:leading-relaxed">
          {t("header.background")}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="./CV_Isai_Arellano_Koo_2026.pdf"
            download
            className="inline-flex items-center justify-center rounded-lg border border-green bg-green/5 px-5 py-3 font-mono text-sm text-green transition-all duration-200 hover:bg-green/10 hover:shadow-glow-sm hover:-translate-y-0.5"
          >
            {t("header.buttoms.download")}
          </a>
          <a
            href="./CV_Isai_Arellano_Koo_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-green/60 px-5 py-3 font-mono text-sm text-green transition-all duration-200 hover:border-green hover:bg-white/[0.03] hover:text-color-links"
          >
            {t("header.buttoms.view")}
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
