import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const [t, i18n] = useTranslation("global");
  const [activeLink, setActiveLink] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (typeof window !== "undefined" && window.innerWidth <= 1024) {
      setIsMobileMenuOpen(false);
    }
  };

  const mobileLinks = [
    ["about", "01.", t("nav.about-me"), "#about"],
    ["experience", "02.", t("nav.experience"), "#experience"],
    ["projects", "03.", t("nav.projects"), "#projects"],
    ["contact", "04.", t("nav.contact"), "#contact"],
  ];

  return (
    <>
      <header className="fixed top-0 z-30 w-full border-b border-white/[0.06] bg-blue-light/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[min(100%,92rem)] items-center justify-between gap-6 px-5 py-3 text-color-links sm:px-10 lg:px-14 lg:py-5 xl:px-16">
          <a
            href="#home"
            onClick={() => handleLinkClick("")}
            className="min-w-0 shrink"
          >
            <span className="font-mono text-xs tracking-wide text-green sm:text-sm md:text-base">
              ISAI ARELLANO KOO
            </span>
          </a>
          <nav className="hidden flex-1 items-center justify-center gap-8 xl:gap-12 lg:flex">
            <a
              className={`whitespace-nowrap font-mono text-sm transition-colors ${
                activeLink === "about" ? "text-green" : "hover:text-white"
              }`}
              onClick={() => handleLinkClick("about")}
              href="#about"
            >
              <span className="text-green">01. </span>
              {t("nav.about-me")}
            </a>
            <a
              className={`whitespace-nowrap font-mono text-sm transition-colors ${
                activeLink === "experience" ? "text-green" : "hover:text-white"
              }`}
              href="#experience"
              onClick={() => handleLinkClick("experience")}
            >
              <span className="text-green">02. </span>
              {t("nav.experience")}
            </a>
            <a
              className={`whitespace-nowrap font-mono text-sm transition-colors ${
                activeLink === "projects" ? "text-green" : "hover:text-white"
              }`}
              href="#projects"
              onClick={() => handleLinkClick("projects")}
            >
              <span className="text-green">03. </span>
              {t("nav.projects")}
            </a>
            <a
              className={`whitespace-nowrap font-mono text-sm transition-colors ${
                activeLink === "contact" ? "text-green" : "hover:text-white"
              }`}
              href="#contact"
              onClick={() => handleLinkClick("contact")}
            >
              <span className="text-green">04. </span>
              {t("nav.contact")}
            </a>
          </nav>
          <div className="hidden w-[200px] shrink-0 lg:block" aria-hidden="true" />

          <button
            type="button"
            className="relative z-[60] flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] text-green transition-colors hover:border-green/50 hover:bg-white/[0.07] lg:hidden"
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span className="sr-only">Menú</span>
            <span
              className={`absolute left-1/2 top-[17px] block h-0.5 w-6 -translate-x-1/2 rounded-full bg-green transition-all duration-300 ease-out ${
                isMobileMenuOpen
                  ? "top-1/2 -translate-y-1/2 rotate-45"
                  : ""
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green transition-opacity duration-200 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-1/2 top-[29px] block h-0.5 w-6 -translate-x-1/2 rounded-full bg-green transition-all duration-300 ease-out ${
                isMobileMenuOpen
                  ? "top-1/2 -translate-y-1/2 -rotate-45"
                  : ""
              }`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-[opacity,visibility] duration-300 ease-out ${
          isMobileMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMobileMenuOpen}
      >
        <button
          type="button"
          className="absolute inset-0 bg-[#050d18]/75 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Cerrar menú"
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-full max-w-[20rem] flex-col border-l border-green/15 bg-[#0b1a30]/98 shadow-nav-drawer backdrop-blur-xl transition-transform duration-300 ease-out sm:max-w-[22rem] ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 pt-20">
            <span className="font-mono text-xs text-green/90">Navegación</span>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-3 py-1.5 font-mono text-xs text-color-links transition-colors hover:bg-white/10 hover:text-white"
            >
              Cerrar
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
            {mobileLinks.map(([key, num, label, href], i) => (
              <a
                key={key}
                href={href}
                onClick={() => handleLinkClick(key)}
                style={{ transitionDelay: isMobileMenuOpen ? `${40 + i * 45}ms` : "0ms" }}
                className={`rounded-xl border border-transparent px-4 py-3.5 font-mono text-sm transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                } ${
                  activeLink === key
                    ? "border-green/25 bg-green/10 text-green"
                    : "text-color-links hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <span className="text-green">{num}</span> {label}
              </a>
            ))}
          </nav>
          <div className="border-t border-white/10 px-5 py-6">
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-gray-500">
              Idioma
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => i18n.changeLanguage("en")}
                className={`flex-1 rounded-xl border py-2.5 font-mono text-sm transition-colors ${
                  i18n.language === "en"
                    ? "border-green/50 bg-green/10 text-green"
                    : "border-white/15 text-gray-400 hover:border-white/25 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => i18n.changeLanguage("es")}
                className={`flex-1 rounded-xl border py-2.5 font-mono text-sm transition-colors ${
                  i18n.language === "es"
                    ? "border-green/50 bg-green/10 text-green"
                    : "border-white/15 text-gray-400 hover:border-white/25 hover:text-white"
                }`}
              >
                ES
              </button>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Nav;
