import React from 'react'

const About = () => {
  return (
    <div className='text-white pt-40 flex flex-col ml-10 lg:ml-48 mr-10 max-w-6xl'>
      <h2 className='font-mono text-3xl mb-10 '><span className='text-green font-mono'>01. </span>About me</h2>
      <div className='flex flex-col lg:flex-row items-center'>
      <p className='text-3xl lg:text-5xl lg:leading-[3.5rem] text-color-links max-w-3xl mr-5 mb-10 lg:mb-0'>
      I'm Isaí, a Full Stack developer. I'm passionate about programming and technology, and I'm committed to creating innovative solutions for technical challenges.
      </p>
      <img className="max-w-xs" src='https://res.cloudinary.com/isaiarellano/image/upload/v1698981750/IsaYAntho/Isa/isai-ak_agubvh.jpg' alt='isai arellano'/>
      </div>
      
    </div>
    
  )
}

export default About