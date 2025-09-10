import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Projects = () => {
  const [expanded, setExpanded] = useState(null)

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index)
  }

  return (
    <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-ovo">My Latest Projects</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Here are some of my latest works that highlight my development skills and creativity.
      </p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {workData.map((project, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl transition"
          >
            {/* Project Image */}
            <div className="w-full h-56 relative">
              <Image
                src={project.bgImage}
                alt={project.title}
                fill
                className="object-cover rounded-t-lg"
              />
              <a
  href={project.codeLink}
  target="_blank"
  rel="noopener noreferrer"
  className="absolute bottom-2 right-2 bg-orange-500 text-white text-xs px-3 py-1 rounded-md hover:bg-orange-600 transition cursor-pointer"
>
  Code <span>{'</>'}</span>

</a>

            </div>

            {/* Project Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                {expanded === index
                  ? project.fullDescription
                  : project.shortDescription}
              </p>

              <button
                className="mt-3 text-sm text-blue-600 hover:underline"
                onClick={() => toggleExpand(index)}
              >
                {expanded === index ? 'Read less' : 'Read more'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
