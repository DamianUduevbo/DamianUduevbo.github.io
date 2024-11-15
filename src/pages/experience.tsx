import React, { ReactComponentElement, useState } from 'react'
import ExperienceCard from '../components/ExperienceCard';
import { ExperienceData } from '../constants';

const Experiences = (): ReactComponentElement<'section'> => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [viewMore, setViewMore] = useState<string>('View More')

  const toggleExpanded = () => {
    setExpanded(!expanded)
    if (expanded) {
      setViewMore('View More')
    } else {
      setViewMore('View Less')
    }
  }

  return (
    <section id='experience' className={`pageSection space-y-10 bg-neutral-900`}>
      <h1 className='text-5xl text-white font-semibold md:text-6xl'>Experience</h1>

      { expanded ?
      <div className=' flex flex-col gap-5 h-fit md:flex-col md:w-3/4'>
        {ExperienceData.map((experience) => {
          return <ExperienceCard key={experience.name} {...experience} />
        })}
      </div> :
      <div className=' flex flex-col gap-5 h-fit md:flex-col md:w-3/4'>
        {ExperienceData.slice(0, 3).map((experience) => {
          return <ExperienceCard key={experience.name} {...experience} />
        })}
      </div>
      }

      <button className='hover-underline-animation' onClick={toggleExpanded}>
        <span className='text-white text-xl'>{viewMore}</span>
      </button>

      <a className='hover-underline-animation' href='https://drive.google.com/file/d/1QzvjR_DA1A-oamQk-4_ypjMkfAV76sS3/view'>
        <span className='text-white text-xl'>View My Resume</span>
      </a>
    </section>
  )
}

export default Experiences