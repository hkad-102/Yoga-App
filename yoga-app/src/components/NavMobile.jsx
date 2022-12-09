import React, {useState} from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { IoClose } from 'react-icons/io5'

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer text-4xl text-heading ml-[10px] lg:hidden'>
        {isOpen ? <IoClose /> : <BiMenuAltRight />}
      </div>
      <ul className={`${isOpen ? 'max-h-60 p-8' : 'max-h-0 p-0'} flex flex-col items-center justify-center absolute w-full top-24 left-0 bg-[#fff] rounded-md shadow-primary space-y-6 overflow-hidden transition-all`}>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Classes</a>
        </li>
        <li>
          <a href='#'>Features</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavMobile