import { useTranslation } from "react-i18next";
import { SiAmazonaws, SiOpenjdk, SiPhp } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import ExpressSVG from "../IconosSVG/backendIcons/ExpressSVG";
import JavaScriptSVG from "../IconosSVG/backendIcons/JavaScriptSVG";
import NodeSVG from "../IconosSVG/backendIcons/NodeSVG";
import SequelizeSVG from "../IconosSVG/backendIcons/SequelizeSVG";
import JWTSVG from "../IconosSVG/backendIcons/JWTSVG";
import Cloudinary from "../IconosSVG/backendIcons/Cloudinary";
import PostgresSVG from "../IconosSVG/databaseIcons/PostgresSVG";
import MySqlSVG from "../IconosSVG/databaseIcons/MySqlSVG";
import GraphqlSVG from "../IconosSVG/databaseIcons/GraphqlSVG";
import MongoDBSVG from "../IconosSVG/databaseIcons/MongoDBSVG";
import ReactSVG from "../IconosSVG/frontendIcons/ReactSVG";
import ReduxSVG from "../IconosSVG/frontendIcons/ReduxSVG";
import TailwindSVG from "../IconosSVG/frontendIcons/TailwindSVG";
import AngularSVG from "../IconosSVG/frontendIcons/AngularSVG";
import GithubSVG from "../IconosSVG/extraIcons/GithubSVG";
import NotionSVG from "../IconosSVG/extraIcons/NotionSVG";

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
            <SkillTile label="Java">
              <SiOpenjdk className="h-14 w-14 text-[#f89820]" aria-hidden />
            </SkillTile>
            <SkillTile label="C#">
              <TbBrandCSharp className="h-14 w-14 text-[#9B4DCA]" aria-hidden />
            </SkillTile>
            <SkillTile label="PHP">
              <SiPhp className="h-14 w-14 text-[#777BB4]" aria-hidden />
            </SkillTile>
            <SkillTile label="Spring Boot">
              <SiSpringboot className="h-14 w-14 text-[#6DB33F]" aria-hidden />
            </SkillTile>
            <SkillTile label="Node.js">
              <NodeSVG />
            </SkillTile>
            <SkillTile label="Express">
              <ExpressSVG />
            </SkillTile>
            <SkillTile label="Sequelize">
              <SequelizeSVG />
            </SkillTile>
            <SkillTile label="Json Web Token">
              <JWTSVG />
            </SkillTile>
            <SkillTile label="Cloudinary">
              <Cloudinary />
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
          <SectionLabel>{t("experience.tec-database")}</SectionLabel>
          <SkillGrid>
            <SkillTile label="Postgres">
              <PostgresSVG />
            </SkillTile>
            <SkillTile label="MySql">
              <MySqlSVG />
            </SkillTile>
            <SkillTile label="Graphql">
              <GraphqlSVG />
            </SkillTile>
            <SkillTile label="MongoDB">
              <MongoDBSVG />
            </SkillTile>
          </SkillGrid>
        </div>

        <div>
          <SectionLabel>{t("experience.tec-front")}</SectionLabel>
          <SkillGrid>
            <SkillTile label="React Js">
              <ReactSVG />
            </SkillTile>
            <SkillTile label="Angular">
              <AngularSVG />
            </SkillTile>
            <SkillTile label="Redux">
              <ReduxSVG />
            </SkillTile>
            <SkillTile label="Tailwind CSS">
              <TailwindSVG />
            </SkillTile>
          </SkillGrid>
        </div>

        <div>
          <SectionLabel>{t("experience.tec-ai")}</SectionLabel>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-color-links/90 sm:text-lg">
            {t("experience.tec-ai-desc")}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Cursor", "Antigravity", "Claude Code"].map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-green/35 bg-blue-primary/40 px-4 py-2 font-mono text-sm text-color-links transition-colors hover:border-green hover:text-green"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div>
          <SectionLabel>{t("experience.tec-extras")}</SectionLabel>
          <SkillGrid>
            <SkillTile label="Github - Github Flow">
              <GithubSVG />
            </SkillTile>
            <SkillTile label="Notion">
              <NotionSVG />
            </SkillTile>
          </SkillGrid>
        </div>
      </div>
    </div>
  );
};

export default Experience;
