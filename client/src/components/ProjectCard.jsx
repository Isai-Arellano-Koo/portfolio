import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({name, description, image, urlGitHub, urlDeploy}) => {
  return (
    <div className='max-w-md flex flex-col items-center'>
        <h2 className='text-xl text-green font-mono mb-5'>{name}</h2>
        <Link to={urlDeploy} target="_blank">
        <img src={image} alt='project image'/>
        </Link>
        
        <div className=' bg-blue-light'>
        <h2 className='mt-4'>{description}</h2>
        </div>
        
        <h2>{urlGitHub}</h2>
    </div>
  )
}

export default ProjectCard