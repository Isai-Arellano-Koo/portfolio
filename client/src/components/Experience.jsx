import { useTranslation } from "react-i18next";
import { SiAmazonaws, SiOpenjdk, SiSpringboot, SiTypescript } from "react-icons/si";
import JavaScriptSVG from "../IconosSVG/backendIcons/JavaScriptSVG";
import NodeSVG from "../IconosSVG/backendIcons/NodeSVG";
import ReactSVG from "../IconosSVG/frontendIcons/ReactSVG";
import AngularSVG from "../IconosSVG/frontendIcons/AngularSVG";

const SkillTile = ({ children, label }) => (
  <div className="group flex w-[7.25rem] flex-col items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-4 transition-all duration-300 hover:border-green/35 hover:bg-white/[0.04] hover:shadow-glow-sm sm:w-[7.5rem]">
    <div className="flex h-14 w-14 items-center justify-center text-white/90 [&_svg]:max-h-[3.25rem] [&_svg]:max-w-[3.25rem] group-hover:scale-[1.03] transition-transform">
      {children}
    </div>
    <span className="text-center font-mono text-xs leading-snug text-color-links/90 group-hover:text-green transition-colors">
      {label}
    </span>
  </div>
);

const SkillGrid = ({ children }) => (
  <div className="mt-8 flex flex-wrap justify-start gap-3 sm:gap-4">{children}</div>
);

const SectionLabel = ({ children }) => (
  <p className="border-l-2 border-green/40 pl-4 font-mono text-base text-green sm:text-lg">
    {children}
  </p>
);

const Experience = () => {
  const [t] = useTranslation("global");
  return (
    <div className="layout-content max-w-6xl pt-32 lg:pt-40">
      <h2 className="mb-10 font-mono text-2xl sm:text-3xl md:mb-12">
        <span className="font-mono text-green">02. </span>
        {t("nav.experience")}
      </h2>
      <div className="space-y-14">
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-left shadow-card sm:p-8">
          <h3 className="font-viet text-xl text-white sm:text-2xl md:text-3xl">
            {t("experience.title-moru")}
          </h3>
          <p className="mt-4 font-viet text-base leading-relaxed text-color-links/90 sm:text-lg">
            {t("experience.description1")}
          </p>
          <p className="mt-4 font-viet text-base leading-relaxed text-color-links/90 sm:text-lg">
            {t("experience.description2")}
          </p>
        </div>

        <div>
          <SectionLabel>{t("experience.tec-back")}</SectionLabel>
          <SkillGrid>
            <SkillTile label="JavaScript">
              <JavaScriptSVG />
            </SkillTile>
            <SkillTile label="TypeScript">
              <SiTypescript className="h-14 w-14 text-[#3178C6]" aria-hidden />
            </SkillTile>
            <SkillTile label="Java">
              <SiOpenjdk className="h-14 w-14 text-[#f89820]" aria-hidden />
            </SkillTile>
            <SkillTile label="Spring Boot">
              <SiSpringboot className="h-14 w-14 text-[#6DB33F]" aria-hidden />
            </SkillTile>
            <SkillTile label="Node.js">
              <NodeSVG />
            </SkillTile>
          </SkillGrid>
        </div>

        <div>
          <SectionLabel>{t("experience.tec-front")}</SectionLabel>
          <SkillGrid>
            <SkillTile label="React">
              <ReactSVG />
            </SkillTile>
            <SkillTile label="Angular">
              <AngularSVG />
            </SkillTile>
          </SkillGrid>
        </div>

        <div>
          <SectionLabel>{t("experience.tec-cloud")}</SectionLabel>
          <SkillGrid>
            <SkillTile label="AWS">
              <SiAmazonaws className="h-14 w-14 text-[#FF9900]" aria-hidden />
            </SkillTile>
          </SkillGrid>
        </div>

        <div>
          <SectionLabel>{t("experience.tec-ai")}</SectionLabel>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-color-links/90 sm:text-lg">
            {t("experience.tec-ai-desc")}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Cursor"].map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-green/35 bg-blue-primary/40 px-4 py-2 font-mono text-sm text-color-links transition-colors hover:border-green hover:text-green"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
