import './App.css';
//import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './pages/landing';
import ProjectsFull from './pages/projectsFull';
import ExperienceSection from './pages/experience';

import { ReactComponent as GitHubIcon } from './assets/github.svg';
import { ReactComponent as LinkedInIcon } from './assets/linkedin.svg';

document.title = 'Damian Uduevbo\'s site'

function App() {
  return (
    <div>
    <nav className='absolute top-0 right-0 z-50 space-x-5 m-5 flex flex-row items-center justify-end'>
        <div className='space-x-5'>
          <a className='text-white hover-underline-animation text-xl'
          href='https://drive.google.com/file/d/1QzvjR_DA1A-oamQk-4_ypjMkfAV76sS3/view?usp=sharing' >
            Resume
          </a>
          <a href='#full-projects-page' className='text-white hover-underline-animation text-xl'>Projects</a>
        </div>
        <div className='space-x-5 flex flex-row'>
          <a href='https://www.linkedin.com/in/damianuduevbo/'>
            <LinkedInIcon fill='white' className='nav-svg' />
          </a>
          <a href='https://github.com/DamianUduevbo'>
            <GitHubIcon fill='white' className='nav-svg' />
          </a>
        </div>
      </nav>

      <LandingPage />
      
      <footer className='flex flex-col w-full h-full bg-black justify-center items-center'>
        <span className='flex border-t-2 border-white text-white text-lg w-1/2 text-center justify-center py-2'>
          Damian Uduevbo © 2023
        </span>
        <span className='text-white text-xs text-center items-center justify-center pb-4'>
          Personal Website v3.0.1
        </span>
      </footer>
    </div>
  );
}

export default App;