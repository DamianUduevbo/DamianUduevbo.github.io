import React from 'react'
import { IProjectProps } from './ICard'
import {ReactComponent as LinkIcon} from '../assets/linkIcon.svg'
//import ProjectImg from '../assets/ProjectImg.png'

const ProjectsCardFull = (props : IProjectProps) => {
  return (
    <div id='projects-full' className="relevanceCard md:w-1/3">
        {/* <img className='w-full rounded-xl' src={ProjectImg} alt='placeholder' />*/}
        <div className='w-full'>
            <h1 className='text-white md:text-3xl'>
                {props.name}
            </h1>
            <h2 className=' font-medium text-pink-300 text-xl'>{props.date}</h2>
            <p className='relative text-white py-4 text-xl'>
                {props.children}
            </p>
            <div className='flex flex-col justify-end bottom-0 space-y-3'>
                {props.githubLink ? 
                <a className='projectLink' href={props.githubLink}>
                    <LinkIcon className='inline-block w-4 h-4 mr-2' fill='red'/>
                    <span>View on GitHub</span>
                </a>
                : <a className='projectLink' href='mailto:damianuduevbo@gmail.com'>
                    <LinkIcon className='inline-block w-4 h-4 mr-2'/>
                    <span>Code available on request</span>
                </a>}
                <div className='flex flex-row flex-wrap gap-4'>
                    {props.techStack.map((tech) => {
                        return <p key={tech} className='relevanceTag'>{tech}</p>
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectsCardFull