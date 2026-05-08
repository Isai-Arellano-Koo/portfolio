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
        <div className="shrink-0 lg:mx-0">
          <div className="relative rounded-2xl p-1 ring-1 ring-green/25 shadow-card shadow-green/5">
            <img
              className="max-w-[280px] rounded-[0.85rem] object-cover sm:max-w-xs"
              src="https://res.cloudinary.com/isaiarellano/image/upload/v1772605784/Isa_ofhblz.jpg"
              alt="Isai Arellano"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
