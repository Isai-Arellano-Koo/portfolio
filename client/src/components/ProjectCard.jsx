import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ name, description, image, urlGitHub, urlDeploy }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className='max-w-sm flex flex-col items-center'>
      <h2 className='text-xl text-green font-mono mb-5'>{name}</h2>
      <Link to={urlDeploy} target="_blank">
        <img src={image} alt='project image' />
      </Link>
      <div className='bg-blue-light'>
        <h2 className='mt-4'>
          {showFullDescription ? description : `${description.split(' ').slice(0, 15).join(' ')}...`}
          
        </h2>
        <button className='text-green p-1' onClick={toggleDescription}>
            {showFullDescription ? 'Read Less' : 'Read More'}
          </button>
      </div>
      <h2>{urlGitHub}</h2>
    </div>
  );
};

export default ProjectCard;
