import React from 'react'

const aboutme = () => {
  return (
    <section id='about-me' className={`pageSection space-y-10 bg-neutral-900`}>
          <h1 className='text-5xl text-white font-semibold md:text-6xl'>About Me</h1>
          <div className=' flex flex-col space-y-16 h-fit text-center text-lg px-6 md:w-3/4 md:flex-col md:text-3xl'>
            <p className='text-white '>
              I am a second year computer science major at <span className='underline decoration-pink-400'>Northeastern University</span>  and an aspiring
              full-stack developer, based out of New York City, NY and Boston, MA.
            </p>
            <p className='text-white'>
              I have a <span className='underline decoration-pink-400'>diverse skill</span> set
              with experience in <span className='underline decoration-pink-400'>
                full-stack enigeering, game development, AI/ML, cybersecurity, and more,
              </span> and have an endless passion for creating something for someone. Also, I am
              proficient in <span className='underline decoration-pink-400'>
                Java, TypeScript, Python, Lua, C and C#,
              </span> and have published several projects that make use of these skills.
            </p>
            <p className='text-white'>
              Outside of computer science, I enjoy practicing martial arts, rock climbing,
              playing volleyball and video games, and solving Wordscapes. Though I may not be the
              best guitar player, I still love playing it nonetheless and can play "Hey There Delilah."
              I also enjoy binge watching TV shows – mostly crime dramas – and am currently watching
              Better Call Saul.
            </p>
          </div>
    </section>
  )
}

export default aboutme