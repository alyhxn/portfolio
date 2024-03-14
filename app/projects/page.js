import Image from 'next/image'
import React from 'react'
import ImageLoader from '../components/ImageLoader'

const Projects = () => {
  const projects = [
    {title: 'Dat Ecosystem', desc: 'Figma to standard.js project in which I vanilla javascript and css to dynamically develop the frontend', link:'https://mehrabbruno.github.io/dat-ecosystem/', techs : ['html', 'css', 'js'] },
    {title: 'Rolling Ball', desc: 'Fun project in which I used three.js to code a HD 3D game', link:'https://alilo8.github.io/runner/',  techs : ['html', 'css', 'js'] },
    {title: 'Colloquium Landing Page', link:'https://colloquium-mu.vercel.app/', desc: 'Figma to React freelance project in which I used React and custom CSS to develop the landing page', techs : []},
    {title: 'NFT Landing Page', link:'https://colloquium-mu.vercel.app/', desc: 'Figma to React freelance project in which I used React and custom CSS to develop the landing page', techs : []},
    {title: 'Slydit Landing Page', link:'https://colloquium-mu.vercel.app/', desc: 'Figma to HTML freelance project which build using HTML and pure CSS with cool animations Code is private can show if you want to check', techs : []},
  ]
  const project_count = projects.length/3;
  const ceil = Math.ceil(project_count);
  const round = Math.round(project_count)
  const project_groups = [
    projects.slice(0, ceil),
    projects.slice(ceil, round + ceil),
    projects.slice(round + ceil, projects.length)
  ]
  return (
    <main className='max-w-[1600px] m-auto p-24 fade-in'>
      <section className="flex items-center justify-between gap-10 mb-10">
          <ImageLoader className='rounded-md aspect-square object-cover bg-gradient-to-r from-cyan-400 to-pink-400' src="/laptop.jpg" alt='projects' width={300} height={300} />
        <div>
          <h1 className='font-bold text-5xl pb-10 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent'>Work, Freelance, and Hobby</h1>
          <div className='text-gray-400 leading-loose'>I am a self-taught frontend web developer with a keen interest in AI. My knowledge in frontend development has been acquired through online courses, blog readings, and hands-on application to various projects during my free time. I have delved into the intricacies of the frontend development process, grasped essential concepts, and explored theoretical foundations. Additionally, my enthusiasm for the AI revolution fuels my passion for staying informed and engaged in this dynamic field.</div>
        </div>
      </section>
      <section className='grid grid-cols-3 gap-4 justify-center'>
        {project_groups.map(project_group => (
          <div key={Math.random()} className='grid gap-4'>
            {project_group.map(project => (  
              <div className='border border-cyan-950 p-6 rounded-md bg-gradient-to-r from-black to-gray-950' key={Math.random()}>
                <div className='flex justify-between pb-2'>
                  <h2 className='text-xl'>{project.title}</h2>
                  <a target='_blank' href={project.link}>
                    <Image src="/outlink.svg" alt='outlink' width={20} height={20} />
                  </a>
                </div>
                <div className='text-gray-400 pb-4'>{project.desc}</div>
                <div className='flex gap-5'>
                  {project.techs.map(tech => (
                    <Image key={tech} className='opacity-30 hover:opacity-100 cursor-pointer' src={`/${tech}.svg`} title={tech} alt={tech} width={20} height={20} />
                  ))}
                </div>
              </div>
            ))
            }
          </div>
        ))}
      </section>
    </main>
  )
}

export default Projects