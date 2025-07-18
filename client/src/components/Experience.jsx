import { useTranslation } from "react-i18next";
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

const Experience = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="text-white pt-40 flex flex-col ml-10 lg:ml-48 mr-10 max-w-6xl">
      <h2 className="font-mono text-3xl mb-10 ">
        <span className="text-green font-mono">02. </span>
        {t("nav.experience")}
      </h2>
      <div className="ml-5">
        <div>
          <div>
            <h2 className="text-3xl mb-5">{t("experience-2.title")}</h2>
            <p className="text-xl mb-10">{t("experience-2.description1")}</p>
          </div>
          <div>
            <h2 className="text-3xl mb-5">{t("experience.title-moru")}</h2>
            <p className="text-xl mb-5">{t("experience.description1")}</p>
            <p className="text-xl mb-10">{t("experience.description2")}</p>
          </div>
        </div>

        <div className="max-w-4xl mr-5 mb-10">
          <p className="text-xl text-green">{t("experience.tec-back")}</p>
          <div className="flex gap-24 mt-14 flex-wrap">
            <span className="text-center max-w-10">
              <JavaScriptSVG />
              JavaScript
            </span>
            <span className="text-center max-w-28">
              <NodeSVG />
              Node.js
            </span>
            <span className="text-center max-w-14">
              <ExpressSVG />
              Express
            </span>
            <span className="text-center max-w-10">
              <SequelizeSVG />
              Sequelize
            </span>
            <span className="flex flex-col items-center max-w-22 text-center">
              {<JWTSVG />}
              Json Web Token
            </span>
            <span className="text-center max-w-10">
              {<Cloudinary />}
              Cloudinary
            </span>
          </div>
        </div>
        <div className=" max-w-3xl mr-5 mb-10">
          <p className="text-xl text-green">{t("experience.tec-database")}</p>
          <div className="mt-14 flex flex-wrap gap-24">
            <span className="text-center max-w-10">
              {<PostgresSVG />}
              Postgres
            </span>
            <span className="flex flex-col items-center max-w-10">
              {<MySqlSVG />}
              MySql
            </span>
            <span className="text-center max-w-10">
              {<GraphqlSVG />}
              Graphql
            </span>
            <span className="flex flex-col items-center max-w-10">
              {<MongoDBSVG />}
              MongoDB
            </span>
          </div>
        </div>
        <div className="max-w-3xl mb-10">
          <p className="text-xl text-green">{t("experience.tec-front")}</p>
          <div className="flex flex-wrap gap-14 items-center mt-14">
            <span className="text-center">
              {<ReactSVG />}
              React Js
            </span>
            <span className="text-center">
              {<AngularSVG />}
              Angular
            </span>
            <span className="text-center">
              {<ReduxSVG />}
              Redux
            </span>
            <span className="flex flex-col items-center">
              {<TailwindSVG />}
              Tailwind CSS
            </span>
          </div>
        </div>
        <div className="max-w-3xl mr-5">
          <p className="text-xl text-green">Extras:</p>
          <div className="flex flex-wrap gap-14 items-center mt-14">
            <span className="flex flex-col items-center">
              {<GithubSVG />}
              Github - Github Flow
            </span>
            <span className="text-center">
              {<NotionSVG />}
              Notion
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
