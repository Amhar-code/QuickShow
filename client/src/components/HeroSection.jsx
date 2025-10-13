import { CalendarIcon, ClockIcon } from 'lucide-react'
import React from 'react'
import { assets } from '../assets/assets'

const HeroSection = () => {
  return (
    <div className='flex flex-col items-start justify-center
    gap-4 md:px-16 lg:px-36 bg-[url("./assets/backgroundImage.png")]
    bg-cover bg-center h-screen'>

        <img src={assets.marvelLogo} alt='marvel' className='max-h-11
        lg:h-11 mt-20' />

        <h1 className='text-5xl md:text-[70px] 
        md:leading-18 font-semibold max-w-110'>Guardians <br /> 
        of the Galaxy</h1>

        <div className='flex items-center gap-4 text-gray-300'>
            <span>Action | Adventure | Sci-Fi</span>
            <div className='fleex items-center gap-1'>
                <CalendarIcon className='w-4.5 h-4.5' />2018
            </div>
            <div className='fleex items-center gap-1'>
                <ClockIcon className='w-4.5 h-4.5' />2h 8m
            </div>
        </div>
    </div>
  )
}

export default HeroSection