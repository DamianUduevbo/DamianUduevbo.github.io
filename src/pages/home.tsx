import { useEffect, useState } from 'react'
import { EnumStyles } from '../tsxStyles'

let i = 0
let j = 0
const CHARS = 'Damian Uduevbo'
const SUBTEXT = 'Passionate, well-rounded, and creative in all things CS.'

const Home = () => {
  const [myName, setMyName] = useState('')
  const [subText, setSubText] = useState('')

  useEffect(() => {
    if (i < CHARS.length && myName !== CHARS) {
      const interval = setInterval(() => {
        setMyName(myName + CHARS[i])
        i++
      }, 50)
      return () => clearInterval(interval)
    } else if (j < SUBTEXT.length && subText !== SUBTEXT) {
      const interval = setInterval(() => {
        setSubText(subText + SUBTEXT[j])
        j++
      }, 25)
      return () => clearInterval(interval)
    }
  }, [myName, subText])

  return (
    <section id='animated-bg' className={`h-screen overflow-hidden flex items-center home  ${EnumStyles.homeMobile} `}>
      <h1 className=' w-fit border-b-2 border-pink-300 text-white px-3 py-4 text-3xl bg-clip-text bg-gradient-to-br from-white to-gray-300 font-bold text-transparent md:text-9xl'>
        {`${myName + (myName === CHARS ? '' : '■')}`}
      </h1>
      <h2 className='text-white px-3 py-4 text-3xl md:text-5xl'>
        {`${subText + (subText === SUBTEXT ? '' : '■')}`}
      </h2>
      <a className='scrollButton' href='#about-me'>
        \HELLO FROM THE BASE REPO/
      </a>
    </section>
  )
}

export default Home