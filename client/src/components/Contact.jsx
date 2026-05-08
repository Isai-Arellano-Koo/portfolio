import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Lottie from "react-lottie";
import gifJson from "../../Comp1.json";

const Contact = () => {
  const [t] = useTranslation("global");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: gifJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const links = [
    {
      href: "https://github.com/Isai-Arellano-Koo",
      icon: FaGithub,
      label: "GitHub",
      external: true,
    },
    {
      href: "https://www.linkedin.com/in/isai-arellano/",
      icon: FaLinkedin,
      label: "LinkedIn",
      external: true,
    },
    {
      href: "mailto:arko.isai19@gmail.com",
      icon: FaEnvelope,
      label: "Email",
      external: false,
    },
  ];

  return (
    <div className="layout-content max-w-6xl pb-24 pt-32 lg:pt-40">
      <h2 className="mb-10 font-mono text-2xl sm:text-3xl md:mb-12">
        <span className="font-mono text-green">04. </span>
        {t("nav.contact")}
      </h2>
      <h3 className="max-w-3xl font-viet text-2xl leading-snug text-color-links/95 sm:text-4xl md:text-5xl md:leading-tight">
        {t("contact.text")}
      </h3>

      <div className="mt-12 flex flex-wrap gap-6 sm:gap-10">
        {links.map(({ href, icon: Icon, label, external }) => (
          <a
            key={label}
            className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.02] text-4xl text-color-links transition-all duration-300 hover:border-green/40 hover:text-green hover:shadow-glow-sm sm:h-20 sm:w-20 sm:text-5xl"
            href={href}
            aria-label={label}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <Icon />
          </a>
        ))}
      </div>
      {// <div className="mt-6 flex justify-start opacity-90">
        //<Lottie options={defaultOptions} />
        //</div>
      }
    </div>
  );
};

export default Contact;
