import React from 'react'
import ExperienceCard from '../components/ExperienceCard';
import { ExperienceData } from '../constants';

const experiences = () => {
  return (
    <section id='experience' className={`pageSection space-y-10 bg-neutral-900`}>
        <h1 className='text-5xl text-white font-semibold md:text-6xl'>Experience</h1>
        <div className=' flex flex-col gap-5 h-fit md:flex-col md:w-3/4'>
            {ExperienceData.map((experience, i) => {
              //experience.key = i
              return <ExperienceCard key={experience.name} {...experience} />
            })}
        </div>
        <a className='hover-underline-animation' href='https://drive.google.com/file/d/1QzvjR_DA1A-oamQk-4_ypjMkfAV76sS3/view'>
            <span className='text-white'>View My Resume</span>
        </a>
    </section>
  )
}

export default experiences