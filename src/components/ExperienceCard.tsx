import React from 'react'
import { ICardProps } from './ICard'

export interface IExperienceProps extends ICardProps {
  position: string;
  description: string[];
}

const ExperienceCard = (props: IExperienceProps) => {
  const parsedChildren: React.ReactNode = props.description.map((paragraph, i) => {
    return <p key={i} className='relative text-inherit py-1 text-'>{paragraph}</p>
  })

  return (
    <div className='relevanceCard md:w-full'>
      <div className='flex'>
        <h2 className='text-inherit font-semibold md:text-2xl'>{props.name} – </h2>
        <h2 className='text-inherit italic md:text-2xl'>{props.position}</h2>
      </div>
      <h2 className=' font-medium text-pink-300 text-xl'>{props.date}</h2>
      <div className='relative text-inherit py-4 text-lg md:text-2xl'>
        {parsedChildren}
      </div>
      <div className='flex flex-col justify-end bottom-0 space-y-3'>
        <div className='flex flex-row flex-wrap space-x-3'>
          {props.techStack.map((tech) => {
            return <p key={tech} className='relevanceTag'>{tech}</p>
          })}
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard