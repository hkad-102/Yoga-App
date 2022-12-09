import React from 'react'

import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa'
import { GrYoga } from 'react-icons/gr'

const Footer = () => {
  return (
    <section className='pb-[70px]' data-aos='fade-up' data-aos-offset='0'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-between items-center lg:flex-row gap-y-5'>
          <div className='flex items-center'>
            <GrYoga className='w-8 h-8'/>
            <h1 className='text-4xl font-bold text-heading ml-2'>Yogo.</h1>
          
          </div>
          <p>&copy; 2022. All Right Reserved by Himanshu Singh</p>
          {/* social Icons */}
          <div className='flex gap-x-4 text-orange text-lg'>
            <div className='w-[50px] h-[50px] bg-[#fff] rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition'>
              <FaGithub />
            </div>
            <div className='w-[50px] h-[50px] bg-[#fff] rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition'>
              <FaYoutube />
            </div>
            <div className='w-[50px] h-[50px] bg-[#fff] rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition'>
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer