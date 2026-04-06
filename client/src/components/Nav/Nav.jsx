import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const [t, i18n] = useTranslation("global");
  const [activeLink, setActiveLink] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (typeof window !== "undefined" && window.innerWidth <= 1024) {
      setIsMobileMenuOpen(false);
    }
  };

  const mobileNavItems = [
    { id: "about", href: "#about", num: "01.", label: t("nav.about-me") },
    { id: "experience", href: "#experience", num: "02.", label: t("nav.experience") },
    { id: "projects", href: "#projects", num: "03.", label: t("nav.projects") },
    { id: "contact", href: "#contact", num: "04.", label: t("nav.contact") },
  ];

  return (
    <>
      <header className="fixed top-0 z-[100] flex w-full items-center justify-between bg-blue-light/95 px-4 py-3 text-color-links shadow-sm shadow-black/20 backdrop-blur-md lg:justify-around lg:p-10">
        <div className="min-w-0 flex-1 lg:flex-none">
          <a href="#home" onClick={() => handleLinkClick("")}>
            <h1 className="mt-0 truncate text-base font-mono text-green sm:text-lg lg:mt-0">
              ISAI ARELLANO KOO
            </h1>
          </a>
        </div>
        <nav className="hidden items-center lg:flex" aria-label="Principal">
          <a
            className={`mr-10 font-mono transition-colors ${
              activeLink === "about" ? "text-green" : "hover:text-white"
            }`}
            onClick={() => handleLinkClick("about")}
            href="#about"
          >
            <span className="text-green">01. </span>
            {t("nav.about-me")}
          </a>
          <a
            className={`mr-10 font-mono transition-colors ${
              activeLink === "experience" ? "text-green" : "hover:text-white"
            }`}
            href="#experience"
            onClick={() => handleLinkClick("experience")}
          >
            <span className="text-green">02. </span>
            {t("nav.experience")}
          </a>
          <a
            className={`mr-10 font-mono transition-colors ${
              activeLink === "projects" ? "text-green" : "hover:text-white"
            }`}
            href="#projects"
            onClick={() => handleLinkClick("projects")}
          >
            <span className="text-green">03. </span>
            {t("nav.projects")}
          </a>
          <a
            className={`mr-10 font-mono transition-colors ${
              activeLink === "contact" ? "text-green" : "hover:text-white"
            }`}
            href="#contact"
            onClick={() => handleLinkClick("contact")}
          >
            <span className="text-green">04. </span>
            {t("nav.contact")}
          </a>
        </nav>
        <div className="flex shrink-0 items-center justify-end lg:hidden">
          <button
            type="button"
            id="mobile-menu-button"
            className="relative flex h-11 w-11 flex-col items-center justify-center rounded-md border border-green/40 text-green transition hover:border-green hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-blue-primary"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu-panel"
            aria-label={isMobileMenuOpen ? t("nav.close-menu") : t("nav.open-menu")}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <span
              className={`block h-0.5 w-6 rounded-full bg-current transition-transform duration-200 ${
                isMobileMenuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`my-1.5 block h-0.5 w-6 rounded-full bg-current transition-opacity duration-200 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-current transition-transform duration-200 ${
                isMobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[90] bg-blue-primary/75 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <aside
        id="mobile-menu-panel"
        className={`fixed right-0 top-0 z-[100] flex h-full w-[min(18rem,88vw)] flex-col border-l border-green/20 bg-blue-light/98 py-24 pl-6 pr-5 shadow-[-8px_0_32px_rgba(0,0,0,0.35)] backdrop-blur-md transition-transform duration-300 ease-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "pointer-events-none translate-x-full"
        }`}
        aria-hidden={!isMobileMenuOpen}
        tabIndex={isMobileMenuOpen ? undefined : -1}
      >
        <nav className="flex flex-col gap-1 font-mono" aria-label="Móvil">
          {mobileNavItems.map(({ id, href, num, label }) => (
            <a
              key={id}
              className={`rounded-md px-3 py-3 text-color-links transition-colors hover:bg-white/5 hover:text-white ${
                activeLink === id ? "text-green" : ""
              }`}
              href={href}
              onClick={() => handleLinkClick(id)}
            >
              <span className="text-green">{num}</span> {label}
            </a>
          ))}
        </nav>
        <div className="mt-8 flex gap-3 border-t border-green/15 pt-6">
          <button
            type="button"
            onClick={() => i18n.changeLanguage("en")}
            className="rounded-md border border-green px-4 py-2 text-sm text-color-links transition hover:border-color-links hover:text-white"
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => i18n.changeLanguage("es")}
            className="rounded-md border border-green px-4 py-2 text-sm text-color-links transition hover:border-color-links hover:text-white"
          >
            ES
          </button>
        </div>
      </aside>
    </>
  );
};

export default Nav;
