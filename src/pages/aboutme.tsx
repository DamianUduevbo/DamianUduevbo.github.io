import React from 'react'

const aboutme = () => {
  return (
    <section id='about-me' className={`pageSection space-y-10 bg-neutral-900`}>
      <h1 className='text-5xl text-white font-semibold md:text-6xl'>About Me</h1>
      <div className=' flex flex-col space-y-16 h-fit text-center text-lg px-6 md:w-3/4 md:flex-col md:text-3xl'>
        <p className='text-white '>
          I'm a third-year computer science major at <span className='underline decoration-pink-400'>Northeastern University</span>,  aiming to become a full-stack developer. I split my time between New York City, NY, and Boston, MA.
        </p>
        <p className='text-white'>
          My skills span various areas, including <span className='underline decoration-pink-400'>
            full-stack engineering, game development, AI/ML, cybersecurity, and blockchain
          </span>. I'm proficient in <span className='underline decoration-pink-400'>
            Java, TypeScript, Python, Lua, C, and C++,
          </span> and I've published several projects using these languages.
        </p>
        <p className='text-white'>
          Beyond computer science, I'm into martial arts, rock climbing, volleyball, video games, and WordScapes. I dabble in guitar playing (I can play "Hey There Delilah"), and I'm an avid viewer of crime dramas, currently hooked on Better Call Saul.
        </p>
      </div>
    </section>
  )
}

export default aboutme