"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ImageLoader from '../components/ImageLoader'

const Projects = () => {
  const projects = [
    {title: 'Dat Ecosystem', desc: 'Figma to standard.js project in which I vanilla javascript and css to dynamically develop the frontend', link:'https://dat-ecosystem.org/', techs : ['html', 'css', 'js'] },
    {title: 'Rolling Ball', desc: 'Fun project in which I used three.js to code a HD 3D game', link:'https://alyhxn.github.io/runner/',  techs : ['html', 'css', 'js', 'threejs'] },
    {title: '3D Path Planning', desc: 'Developed a new path planning algorithm after 6 months of research and testing', link:'https://alyhxn.github.io/3D-Path-Planning/',  techs : ['html', 'css', 'js', 'threejs'] },
    {title: 'X-Recruiter', desc: 'Figma to HTML, CSS & Javascript freelance project. It consist of multiple modals on different pages and is fully mobile responsive.', link:'https://x-recruiter.vercel.app/',  techs : ['html', 'css', 'js'] },
    {title: 'Venturize Production', desc: 'Figma to HTML, CSS & Javascript freelance project. It consist of multiple modals on different pages and is fully mobile responsive.', link:'https://venturize-production.netlify.app/',  techs : ['html', 'css', 'js'] },
    {title: 'Colloquium Landing Page', link:'https://colloquium-mu.vercel.app/', desc: 'Figma to React freelance project in which I used React and custom CSS to develop the landing page', techs : ['html', 'css', 'js', 'react']},
  ]
  const [projectGroups, setProjectGroups] = useState([])
  useEffect(() => {
    let divident = 3
    if(window.innerWidth < 910)
      divident = 2
    const project_count = projects.length/divident;
    const ceil = Math.ceil(project_count);
    const round = Math.round(project_count)
    setProjectGroups([
      projects.slice(0, ceil),
      projects.slice(ceil, round + ceil),
      projects.slice(round + ceil, projects.length)
    ])
  
    return
  }, [])
  
  
  return (
    <main className='max-w-1600 m-auto p-96 fade-in'>
      <section className="flex md-flex-col items-center justify-between gap-40 pb-40 m-auto max-w-1200">
          <ImageLoader className='rounded-6 img-common' src="/laptop.jpg" alt='projects' width={300} height={300} />
        <div>
          <h1 className='font-bold font-48 pb-40 text-gradient bg-gradient-3'>Work, Freelance, and Hobby</h1>
          <div className='color-2 line-height-2'>Life is meaningless without projects. I like to keep all my projects saved, even the simplest ones, to keep the track of my progress. Here you can find {projects.length} projects that I have developed</div>
        </div>
      </section>
      <section className='grid grid-cols-3 justify-center overflow-hidden relative'>
        {projectGroups.map(project_group => (
          <div key={Math.random()} className='grid'>
            {project_group.map(project => (  
              <div className='project-card color-2 p-24' key={Math.random()}>
                <div className='flex justify-between pb-8'>
                  <h2 className='font-20'>{project.title}</h2>
                  <a target='_blank' href={project.link}>
                    <Image src="/outlink.svg" alt='outlink' width={20} height={20} />
                  </a>
                </div>
                <div className='pb-16'>{project.desc}</div>
                <div className='flex gap-10'>
                  {project.techs.map(tech => (
                    <Image key={tech} className='opacity-30 hover:opacity-100 cursor-pointer' src={`/${tech}.svg`} title={tech} alt={tech} width={20} height={20} />
                  ))}
                </div>
              </div>
            ))
            }
          </div>
        ))}
        <div className='bg-project'></div>
      </section>
    </main>
  )
}

export default Projects