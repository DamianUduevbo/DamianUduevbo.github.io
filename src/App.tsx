import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './pages/landing';
import ProjectsFull from './pages/projectsFull';
import ExperienceSection from './pages/experience';

import { ReactComponent as GitHubIcon } from './assets/github.svg';
import { ReactComponent as LinkedInIcon } from './assets/linkedin.svg';

document.title = 'Damian Uduevbo\'s site'

function App() {
  return (
    <BrowserRouter>
    <nav className='absolute top-0 right-0 z-50 space-x-5 m-5 flex flex-row items-center justify-end'>
        <div className='space-x-5'>
          <a href='https://drive.google.com/file/d/1QzvjR_DA1A-oamQk-4_ypjMkfAV76sS3/view?usp=sharing' className='text-white hover-underline-animation text-lg'>Resume</a>
          <a href='/projects' className='text-white hover-underline-animation  text-lg'>Pojects</a>
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

      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/projects' element={<ProjectsFull />} />
        <Route path='*' element={<LandingPage />} />
      </Routes>

      
      <footer className='flex flex-col w-full h-full bg-black justify-center items-center'>
        <span className='flex border-t-2 border-white text-white text-lg w-1/2 text-center justify-center py-2'>
          Damian Uduevbo © 2023
        </span>
        <span className='text-white text-xs text-center items-center justify-center pb-4'>
          Personal Website v3.0
        </span>
      </footer>
    </BrowserRouter>
  );
}

export default App;