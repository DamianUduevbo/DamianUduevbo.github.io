import React from 'react'
import ProjectsCardFull from '../components/ProjectsCardFull'
import { ProjectData } from '../constants'

const  projectsFull = () => {
  return (
    <section id='full-projects-page' className={`pageSection space-y-10 bg-gradient-to-t from-black to-neutral-900 bg-slate-900 `}>
      <h1 className='text-5xl text-white font-semibold md:text-6xl'>Projects</h1>
      <div className=' flex flex-col justify-center gap-5 h-full md:flex-row md:flex-wrap md:w-full z-0'>
        {ProjectData.map((project) => {
          return <ProjectsCardFull key={`${project.name}${Math.random() * 10000}`} {...project}>
            {project.description}
          </ProjectsCardFull>
        })}
      </div>
    </section>
  )
}

export default projectsFull