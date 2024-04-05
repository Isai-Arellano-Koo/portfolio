import React from 'react'
import { useTranslation } from 'react-i18next'

const About = () => {
  const [t, i18n] = useTranslation("global")
  return (
    <div className='text-white pt-40 flex flex-col ml-10 lg:ml-48 mr-10 max-w-6xl'>
      <h2 className='font-mono text-3xl mb-10 '><span className='text-green font-mono'>01. </span>{t("nav.about-me")}</h2>
      <div className='flex flex-col lg:flex-row items-center'>
      <p className='text-3xl lg:leading-[3.5rem] text-color-links max-w-3xl mr-5 mb-10 lg:mb-0'>
      {t("about.about-text")}
      </p>
      <img className="max-w-xs" src='https://res.cloudinary.com/isaiarellano/image/upload/v1698981750/IsaYAntho/Isa/isai-ak_agubvh.jpg' alt='isai arellano'/>
      </div>
      
    </div>
    
  )
}

export default About