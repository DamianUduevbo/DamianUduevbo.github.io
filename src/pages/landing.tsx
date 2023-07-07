import React from 'react'
import { useEffect, useState } from 'react';

import WAVES from 'vanta/dist/vanta.waves.min'
import { ReactComponent as GitHubIcon } from '../assets/github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/linkedin.svg';

import HomeSection from './home'
import AboutSection from './aboutme'
import ExperienceSection from './experience'
import ProjectsSection from './projects'
import ProjectsFullSection from './projectsFull';


const Landing = () => {
  const [vantaEffect, setVantaEffect] = useState(null as any | null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: "#animated-bg",
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x1a1a1a,
          shininess: 0.00,
          waveHeight: 40.00,
          waveSpeed: 0.3,
          zoom: 3.00
        })
      )
    }
    return () => {
      if (vantaEffect) { vantaEffect.destroy() }
    }
  }, [vantaEffect])
  
  return (
    <div className='w-full flex flex-col'>
      <div className={`w-full spacer flex flex-col justify-center`}>
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>
    </div>
  )
}

export default Landing