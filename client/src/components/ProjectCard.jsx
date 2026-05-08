import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ name, description, image, urlGitHub, urlDeploy }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [t] = useTranslation("global");

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const preview =
    description.split(" ").length > 15
      ? `${description.split(" ").slice(0, 15).join(" ")}…`
      : description;

  return (
    <article className="flex max-w-sm flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] shadow-card transition-all duration-300 hover:border-green/25 hover:shadow-glow-sm">
      <div className="border-b border-white/[0.06] px-5 pb-4 pt-6">
        <h2 className="text-left font-mono text-lg text-green sm:text-xl">{name}</h2>
      </div>

      <a
        href={urlDeploy}
        target="_blank"
        rel="noopener noreferrer"
        className="group block overflow-hidden bg-[#0a192f]/50"
      >
        <img
          src={image}
          alt=""
          className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </a>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4 text-left">
        <p className="font-viet text-sm leading-relaxed text-color-links/90 sm:text-base">
          {showFullDescription ? description : preview}
        </p>
        <button
          type="button"
          className="mt-3 self-start font-mono text-sm text-green transition-colors hover:text-white"
          onClick={toggleDescription}
        >
          {showFullDescription ? t("projects.readLess") : t("projects.readMore")}
        </button>
        {urlGitHub ? (
          <div className="mt-4 flex w-full justify-end border-t border-white/[0.06] pt-4">
            <a
              className="text-2xl text-color-links transition-colors hover:text-green"
              href={urlGitHub}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
};

export default ProjectCard;
