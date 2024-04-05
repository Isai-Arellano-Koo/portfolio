import { useState } from "react";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const [t, i18n] = useTranslation("global")
  const [activeLink, setActiveLink] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (window.innerWidth <= 768) {
      setIsMobileMenuOpen(false);
    }
  };
  return (
    <div className="fixed top-0 w-full p-3 lg:p-10 flex backdrop-blur-sm justify-around bg-blue-light text-color-links items-center">
      <div>
        <a href="#home" onClick={() => handleLinkClick("")}>
          <h1 className="mt-2 lg:mt-0 text-green font-mono">
            ISAI ARELLANO KOO
          </h1>
        </a>
      </div>
      <div className="hidden lg:flex items-center">
        <a
          className={`mr-10 font-mono ${
            activeLink === "about" ? "text-green" : "hover:text-white"
          } `}
          onClick={() => handleLinkClick("about")}
          href="#about"
        >
          <span className="text-green">01. </span>{t("nav.about-me")}
        </a>
        <a
          className={`mr-10 font-mono ${
            activeLink === "experience" ? "text-green" : "hover:text-white"
          } `}
          href="#experience"
          onClick={() => handleLinkClick("experience")}
        >
          <span className="text-green">02. </span>{t("nav.experience")}
        </a>
        <a
          className={`mr-10 font-mono ${
            activeLink === "projects" ? "text-green" : "hover:text-white"
          } `}
          href="#projects"
          onClick={() => handleLinkClick("projects")}
        >
          <span className="text-green">03. </span>{t("nav.projects")}
        </a>
        <a
          className={`mr-10 font-mono ${
            activeLink === "contact" ? "text-green" : "hover:text-white"
          } `}
          href="#contact"
          onClick={() => handleLinkClick("contact")}
        >
          <span className="text-green">04. </span>{t("nav.contact")}
        </a>
      </div>
      <div className="lg:hidden">
        <button
          className="block text-3xl text-green p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <a
            className={`block font-mono p-2 ${
              activeLink === "about" ? "text-green" : ""
            } `}
            href="#about"
            onClick={() => handleLinkClick("about")}
          >
            {t("nav.about-me")}
          </a>
          <a
            className={`block font-mono p-2 ${
              activeLink === "experience" ? "text-green" : ""
            } `}
            href="#experience"
            onClick={() => handleLinkClick("experience")}
          >
            {t("nav.experience")}
          </a>
          <a
            className={`block font-mono p-2 ${
              activeLink === "projects" ? "text-green" : ""
            } `}
            href="#projects"
            onClick={() => handleLinkClick("projects")}
          >
            {t("nav.projects")}
          </a>
          <a
            className={`block font-mono p-2 ${
              activeLink === "contact" ? "text-green" : ""
            } `}
            href="#contact"
            onClick={() => handleLinkClick("contact")}
          >
            {t("nav.contact")}
          </a>
          <div className="text-gray-400 flex gap-4">
          <button  onClick={() => i18n.changeLanguage("en")} className="hover:text-white border p-2 border-green">
            EN
          </button>
          <button  onClick={() => i18n.changeLanguage("es")} className="hover:text-white border p-2 border-green">
            ES
          </button>
        </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
