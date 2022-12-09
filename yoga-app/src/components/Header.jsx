import React, {useState, useEffect } from 'react'
import { GrYoga } from 'react-icons/gr'

import Nav from './Nav'
import NavMobile from './NavMobile';


const Header = () => {
  const [header, setHeader] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll' , () => {
      window.scrollY > 36 ? setHeader(true) : setHeader(false)
    })
  }, [header])
  return (
    <header className={`${header ? 'top-0 h-[80px]' : 'top-9'} fixed bg-[#fff] w-full max-w-[90vw] lg:max-w-[1170px] mx-auto rounded-md h-[90px] shadow-primary px-4 lg:px-8 z-20 transition-all duration-500 flex items-center justify-between`}>
      <div className='flex items-center'>
        {/* logo */}
        <div className='flex items-center gap-x-2'>
          <GrYoga className='w-6 h-6'/>
          <h1 className='text-2xl font-bold text-heading'>Yogo.</h1>
        </div>
       
        {/* nav */}
        <div className='hidden lg:flex'>
          <Nav />
        </div>
      </div>
      <div className='flex items-center'>
        <div className='flex gap-x-4 lg:gap-x-9'>
          <button className='text-heading font-medium text-sm lg:text-base hover:text-orange transition'
          >Sign In</button>
          <button className='btn btn-md lg:px-[30px] bg-orange-100 border border-orange text-orange font-medium text-sm lg:text-base hover:bg-orange-200 hover:text-[#fff] transition'
          >Sign Up</button>
        </div>
        {/* navMobile */}
        <NavMobile />
      </div>
    </header>
  )
}

export default Header