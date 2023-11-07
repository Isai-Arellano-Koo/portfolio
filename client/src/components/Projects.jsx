import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios('/projects').then(({data}) => {
      const projects = data
      setProjects(projects)
    }).catch((error) => {
      console.log(error.message)
    })
  }, [])
  return (
    <div className='text-white pt-40 ml-10 lg:ml-48 max-w-8xl mr-5'>
     <h2 className="font-mono text-3xl mb-10 ">
        <span className="text-green font-mono">03. </span>Personal Projects
      </h2>
      <div className='flex lg:flex-row flex-wrap gap-10'>
      {projects?.map((project) => {return (
        <ProjectCard key={project.id} name={project.name} image={project.image} description={project.description} urlDeploy={project.urlDeploy} urlGitHub={project.urlGitHub}/>
      )})}
      </div>
      
    </div>
  )
}

export default Projects