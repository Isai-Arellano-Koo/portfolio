import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsES } from "../tranlations/es/global.json";
import { projectsEN } from "../tranlations/en/global.json";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const [t, i18n] = useTranslation("global");

  const projects = i18n.language === "es" ? projectsES : projectsEN;

  return (
    <div className="layout-content max-w-7xl pt-32 lg:pt-40">
      <h2 className="mb-10 font-mono text-2xl sm:text-3xl md:mb-12">
        <span className="font-mono text-green">03. </span>
        {t("nav.projects")}
      </h2>
      <div className="flex flex-wrap justify-start gap-8 lg:gap-10">
        {projects?.map((project) => (
          <ProjectCard
            key={project.id}
            name={t(project.name)}
            image={project.image}
            description={t(project.description)}
            urlDeploy={project.urlDeploy}
            urlGitHub={project.urlGitHub}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
