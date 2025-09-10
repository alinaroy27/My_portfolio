import { assets, infoList,toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    
    <div id='about' className='w-full  px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-ovo'>About me</h2>
        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
            </div>
            
            <div className='flex-1'>
                <p className='mb-10 max-w-2xl font-ovo'>
                    I am an enthusiastic and tech-driven Computer Science student with a focus on analytical thinking and problem-solving. I bring organizational skills, a solid technical foundation, and the ability to work both independently and in team environments. I am looking for opportunities to contribute and grow as a software professional.
                </p>
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon,iconDark, title, description},index)=>(
                        <li className='border-[0.5] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-black'
                        key={index} >
                            <Image src={icon} alt={title} className='w-7 mt-3'/>
                            <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                            <p className='text-gray-600 text-sm'>{description}</p>
                        </li>
                    ))}
                </ul>
                {/* <h4>Tools I use</h4>
                <ul>
                    {toolsData.map((tool,index)=>(
                        <li key={index}>
                            <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                        </li>
                    ))}
                </ul> */}
                <h4 className="mt-12 mb-6 text-xl font-ovo">Tools I use</h4>
<ul className="flex flex-wrap gap-6">
  {toolsData.map((tool, index) => (
    <li
      key={index}
      className="relative group flex items-center justify-center w-14 h-14 p-2 rounded-xl shadow-sm border border-gray-200 hover:shadow-black transition duration-300"
    >
      <img
        src={tool.src}
        alt={tool.name}
        className="w-10 h-10 object-contain"
      />

      {/* Tooltip */}
      <span className="absolute -bottom-8 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
        {tool.name}
      </span>
    </li>
  ))}
</ul>


            </div>
        </div>
    </div>
  )
}

export default About