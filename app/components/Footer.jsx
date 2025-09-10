import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo} alt='logo' className='w-36 mx-auto mb-2' />
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt='logo' className='w-6' />
                royalina2004@gmail.com
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
  <p>© 2025 Alina Roy. All rights reserved.</p>
  
  <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 text-2xl'>
    <li>
      <a target='_blank' href='https://github.com/alinaroy27' className="hover:text-gray-600">
        <FaGithub />
      </a>
    </li>
    <li>
      <a target='_blank' href='https://www.linkedin.com/in/alina-roy-607b86291/' className="hover:text-blue-600">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a target='_blank' href='https://leetcode.com/u/Alina_roy/' className="hover:text-orange-500">
        <FaCode />
      </a>
    </li>
  </ul>
</div>
    </div>
  )
}

export default Footer