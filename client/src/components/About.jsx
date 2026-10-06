import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const [t] = useTranslation("global");

  return (
    <div className="layout-content max-w-6xl pt-32 lg:pt-40">
      <h2 className="mb-10 font-mono text-2xl sm:text-3xl md:mb-12">
        <span className="font-mono text-green">01. </span>
        {t("nav.about-me")}
      </h2>

      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-14">
        <p className="max-w-3xl font-viet text-xl leading-[1.85] text-color-links/95 lg:text-2xl lg:leading-[1.75]">
          {t("about.about-text")}
        </p>

        <div className="flex justify-center lg:shrink-0 lg:justify-start">
          <img
            className="max-w-[280px] rounded-2xl object-cover sm:max-w-xs"
            src="/image/isai.png"
            alt="Isai Arellano"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
