
import './App.css';
import Grid, { GridTile } from './components/Grid';
import Middle from './components/Middle';

const mainStyle: string = 'relative top-10 align-middle text-center text-cyan-50 w-1/2 left-1/4 text-xl'

const underlineText : any = (text : string) => {
  return (
    <span className=' underline'>{text}</span>
  )
}

function App() {
  document.title = 'Damian Uduevbo'

  return (
    <div className='w-auto h-full bg-gradient-to-tl to-slate-900 via-slate-900 from-green-600 bg-no-repeat '>

      <nav className='flex absolute text-white px-5 right-2 pt-5 space-x-5'>
        <a className=' hover:fill-white' href='https://github.com/DamianUduevbo' >
          <svg className=' hover:fill-white' width="50" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_6)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M30.0248 0C13.4219 0 0 13.75 0 30.7605C0 44.3579 8.59985 55.8679 20.5301 59.9416C22.0217 60.2479 22.5681 59.2798 22.5681 58.4654C22.5681 57.7522 22.5189 55.3079 22.5189 52.761C14.1667 54.5948 12.4275 49.0942 12.4275 49.0942C11.0852 45.5292 9.0964 44.6129 9.0964 44.6129C6.36277 42.7286 9.29559 42.7286 9.29559 42.7286C12.3279 42.9323 13.919 45.8861 13.919 45.8861C16.6029 50.571 20.9278 49.2473 22.6676 48.4323C22.916 46.4461 23.7118 45.071 24.5569 44.3073C17.8954 43.5942 10.8868 40.9461 10.8868 29.1305C10.8868 25.7693 12.079 23.0192 13.9682 20.8805C13.6702 20.1168 12.626 16.9587 14.2669 12.7319C14.2669 12.7319 16.8021 11.9168 22.5183 15.8893C24.9656 15.2159 27.4895 14.8734 30.0248 14.8706C32.5599 14.8706 35.1443 15.2274 37.5307 15.8893C43.2476 11.9168 45.7827 12.7319 45.7827 12.7319C47.4236 16.9587 46.3789 20.1168 46.0808 20.8805C48.0198 23.0192 49.1629 25.7693 49.1629 29.1305C49.1629 40.9461 42.1543 43.5429 35.443 44.3073C36.5369 45.2748 37.4809 47.1079 37.4809 50.0111C37.4809 54.1361 37.4318 57.4467 37.4318 58.4648C37.4318 59.2798 37.9787 60.2479 39.4698 59.9422C51.4 55.8672 59.9999 44.3579 59.9999 30.7605C60.049 13.75 46.578 0 30.0248 0Z" fill="white" fill-opacity="0.5" />
            </g>
            <defs>
              <clipPath id="clip0_1_6">
                <rect width="60" height="60" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>

        <a className='' href='https://www.linkedin.com/in/damian-uduevbo-28652222b/'>
          <svg width="50" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_4)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M46.837 44.1369V32.4249C46.837 26.15 43.487 23.23 39.021 23.23C35.417 23.23 33.802 25.213 32.902 26.604V23.71H26.112C26.202 25.627 26.112 44.1369 26.112 44.1369H32.902V32.729C32.902 32.12 32.946 31.51 33.126 31.074C33.616 29.854 34.733 28.591 36.608 28.591C39.066 28.591 40.048 30.464 40.048 33.2089V44.138H46.837V44.1369ZM18.959 20.922C21.326 20.922 22.801 19.352 22.801 17.391C22.757 15.388 21.326 13.863 19.004 13.863C16.682 13.863 15.163 15.3869 15.163 17.391C15.163 19.352 16.637 20.922 18.916 20.922H18.959ZM30 60C13.432 60 0 46.568 0 29.9999C0 13.431 13.432 0 30 0C46.568 0 60 13.431 60 29.9999C60 46.568 46.568 60 30 60ZM22.354 44.1369V23.71H15.565V44.1369H22.354Z" fill="white" fill-opacity="0.5" />
            </g>
            <defs>
              <clipPath id="clip0_1_4">
                <rect width="60" height="60" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>

        <a className='' href='mailto:uduevbo.d@northeastern.edu'>
          <svg width="50" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_17)">
              <path d="M40 36.2527L80 5.17738V3.37268C80 1.51018 78.5369 0 76.7324 0H3.26756C1.46311 0 0 1.51018 0 3.37268V5.17738L40 36.2527Z" fill="white" fill-opacity="0.5" />
              <path d="M42.1378 43.7797C41.5049 44.2715 40.752 44.5174 40 44.5174C39.248 44.5174 38.4951 44.2715 37.8622 43.7797L0 14.3642V56.6273C0 58.4898 1.46311 60 3.26756 60H76.7324C78.5369 60 80 58.4898 80 56.6273V14.3642L42.1378 43.7797Z" fill="white" fill-opacity="0.5" />
            </g>
            <defs>
              <clipPath id="clip0_1_17">
                <rect width="80" height="60" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </nav>

      <br></br>
      <br></br>

      <main>
        <Middle title='Damian Uduevbo' className=' text-9xl mb-10'>

          <div className={`relative w-3/4 ml-auto mr-auto text-center border-b mb-60 text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-tl to-slate-300 via-slate-300 from-white pb-24`}>
            Passionate, well-rounded, and creative in all things CS.
          </div>
        </Middle>

        <Middle title='About Me' className='text-7xl'>
          <div className={mainStyle + ` text-2xl font-mono mb-40 border-b`}>
            <p className='mb-3'>
              I am a second year computer science major at {underlineText('Northeastern University')} and an aspiring full-stack developer, based out of New York City, NY and Boston, MA.
            </p>

            <p className='mb-3'>
              I have a {underlineText('diverse skill set')} with experience in {underlineText('full-stack development, game programming, AI/ML, cybersecurity, and more')},
              and have an endless passion for creating something for someone.
              Also, I am proficient in {underlineText('Java, JavaScript, Python, C and C#')}, and have published several projects that make use of these skills.
            </p>

            <p className='mb-10'>
              Outside of computer science, I enjoy practicing martial arts, rock climbing, playing volleyball and video games, and solving Wordscapes.
              Though I may not be the best guitar player, I still love playing it nonetheless and can play "Hey There Delilah."
              I also enjoy binge watching TV shows -- mostly crime dramas -- and am currently watching Better Call Saul.
            </p>
          </div>
        </Middle>

        <Middle title='Projects' className='text-7xl'>
          <div className={`relative top-10 align-middle text-center text-cyan-50 w-3/4 ml-auto mr-auto text-xl`}>
            <div>
              <button className='relative -left-2'>Published</button>&
              <button className='relative left-2'>Upcoming</button>
            </div>

            <br></br>

            <Grid rows='2' columns='2' spacing='4'
              className='relative grid grid-cols-3 grid-flow-row gap-4 group text-left scale-y-100 ease-in-out duration-300'>
                
              <GridTile title='Covey.Town - Spotify Integration' year='2023'
                bubbleTags={[ 'React', 'TypeScript', 'Model View Controller', 'REST API', 'Spotify API']}
                link='https://github.com/neu-cs4530/spring-23-team-709'>
                A social media platform that allows users to create and join virtual towns. Users can chat with each other, play games, listen to music and more.
              </GridTile>

              <GridTile title='Image Processor' year='2022'
                bubbleTags={['Java', 'Model View Controller', 'Design Patterns', 'Java Swing']}
                link='https://github.com/DamianUduevbo/CS3500-ImageProcessor2.0'>
                An image processing application that can open, modify, and save images. Supports .ppm, .png, and .jpeg files.
              </GridTile>

              <GridTile title='Project Big City' year='2022'
                bubbleTags={['JavaScript', 'Python', 'Web Scraping']} private>
                A private webscraping utility.
              </GridTile>

              <GridTile title='Menu Manager' year='2022'
                bubbleTags={['JavaScript', 'React', 'REST API', 'Node.js', 'Express.js', 'MongoDB']}
                link='https://github.com/DamianUduevbo/MERN-Stack-App'>
                A full-stack web application that allows restaurant owners to manage their menu items.
              </GridTile>

              <GridTile title='Bellman Ford GPS' year='2022'
                bubbleTags={['Lua', 'Roblox', 'Algorithms', 'Pathfinding', 'Game Development']}
                link='' private>
                After taking an algorithms course at Northeastern University, I wanted to apply what
                I have learned to a practical scenario. I chose this project because a GPS system was the first thing that came to mind
                when I first learned about Bellman-Ford, and chose to do this in Roblox since it is fast and
                easy to build and run a 3D enviroment.
              </GridTile>

              <GridTile title='FUSE File System' year='2022' bubbleTags={['C', 'Linux']}
                link='https://github.com/DamianUduevbo/CS3650p2-du-bm'>
                Custom FUSE file system project, capable of mounting 1MB disk images.
              </GridTile>
              <GridTile title='Calulator App' year='2022' bubbleTags={['Assembly', 'Linux']}
                link='https://github.com/DamianUduevbo/CS3650-Assignment2'>
                A simple 4-function calculator app written in Assembly code.
              </GridTile>
            </Grid>
          </div>
        </Middle>
      </main>


      <footer className='relative text-center text-white mt-20 pt-5 '>
        <span className='absolute  border-t pt-2 bottom-1 '>
          © {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
}

export default App;
