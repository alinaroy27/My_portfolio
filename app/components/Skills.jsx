import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className='w-full  px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-ovo'>What i Offer</h4>
        <h2 className='text-center text-5xl font-ovo'>My Skills</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
            Here are some of the skills I use to bring my ideas to life.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10">
  {serviceData.map(({icon,title,description,link},index)=>(
    <div key={index} className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500">
      <Image src={icon} alt='' className="w-10"/>
      <h3 className="text-lg my-4 text-gray-700">{title}</h3>
      <p className="text-sm text-gray-600 leading-5">{description}</p>
    </div>
  ))}
</div>

    </div>
  )
}

export default Skills