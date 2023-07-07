import React from 'react'
import ProjectsCard from '../components/ProjectsCard'
import { ProjectData } from '../constants'

const projects = () => {
  return (
    <section className={`pageSection space-y-10 bg-gradient-to-t from-black to-neutral-900 bg-slate-900`}>
      <h1 className='text-5xl text-white font-semibold md:text-6xl'>Projects</h1>
      <div className=' flex flex-col gap-5 justify-items-start h-full md:flex-col md:w-3/4'>
        {ProjectData.map((project, i) => {
          if (i > 2) return null
          return <ProjectsCard key={project.githubLink} {...project}>
            {project.description}
          </ProjectsCard>
        })}
      </div>
      <a href='/projects' className='hover-underline-animation'>
        <span className='text-white'>View More</span>
      </a>
    </section>
  )
}

export default projects