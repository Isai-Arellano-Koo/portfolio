import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ name, description, image, urlGitHub, urlDeploy }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="max-w-sm flex flex-col items-center  bg-blue-light py-10 px-5 border border-gray-900 hover:border-gray-800">
      <div className="flex gap-4">
        <h2 className="text-xl text-green font-mono mb-5">{name}</h2>
      </div>

      <Link to={urlDeploy} target="_blank">
        <img src={image} alt="project image" />
      </Link>
      <div className="bg-blue-light">
        <h2 className="mt-4">
          {showFullDescription
            ? description
            : `${description.split(" ").slice(0, 15).join(" ")}...`}
        </h2>
        <button className="text-green p-1" onClick={toggleDescription}>
          {showFullDescription ? "Read Less" : "Read More"}
        </button>
      </div>
      <div className="ml-48">
        {urlGitHub ? (
          <Link className="text-3xl" to={urlGitHub} target="_blank">
            <FaGithub />
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
