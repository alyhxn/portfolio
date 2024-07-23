import React from 'react'
import ImageLoader from '../components/ImageLoader'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  const skills = [
    {
      name: 'react',
      projects: [
        {
          name: 'Colloqium Landing Page',
          link: 'sorry, repo is private!'
        },
        {
          name: 'Portfolio',
          link: 'https://github.com/alyhxn/portfolio'
        }
      ]
    },
    {
      name: 'threeJS',
      projects: [
        {
          name: '3D Path Planning',
          link: 'https://github.com/alyhxn/3D-Path-Planning'
        },
        {
          name: 'Rolling Ball',
          link: 'https://github.com/alyhxn/runner'
        }
      ] 
    },{
      name: 'HTML',
      projects: [
        {
          name: 'Venturize Production',
          link: 'https://github.com/alyhxn/venturize-production'
        },
        {
          name: 'X-recruiter',
          link: 'https://github.com/alyhxn/recruiter'
        }
      ]
    },
    {
      name: 'JS',
      projects: [
        {
          name: 'Dat Ecosystem',
          link: 'https://github.com/dat-ecosystem/website'
        }
      ]
    }
  ]
  const experiences = [
    {
      name: 'Frontend Developer',
      inc: 'Playproject',
      logo: 'playproject.svg',
      time: '11 months',
      date: 'Aug 2023 - Present',
      desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nesciunt voluptates, quia ratione culpa maxime molestias fuga fugiat sed blanditiis! Impedit dolor magnam doloremque doloribus quisquam optio autem suscipit. Nulla!',
      techs: [ 'JS', 'HTML', 'CSS' ]
    },
    {
      name: 'Frontend Developer',
      inc: 'Muscled Agency',
      logo: 'muscled.jpeg',
      time: '9 months',
      date: 'May 2023 - Jan 2024',
      desc: 'In Muscled Agency, my role involves contributing to a range of projects, including Shopify development, theme customization, SEO optimization, marketing integration, custom coding, product listing enhancement, and MERN stack projects. I have hands-on experience collaborating on Shopify store development, tailoring themes for unique brand identities, implementing SEO best practices, and optimizing product listings for an enhanced user experience. Additionally, my role includes a focus on speed optimization and leveraging the MERN stack for innovative web applications.',
      techs: [ 'react', 'JS' ]
    },
    {
      name: 'Research Assistant',
      inc: 'Control Automotive & Robotics Laboratory',
      logo: 'carl.jpeg',
      time: '6 months',
      date: 'Mar 2022 - Aug 2022',
      desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nesciunt voluptates, quia ratione culpa maxime molestias fuga fugiat sed blanditiis! Impedit dolor magnam doloremque doloribus quisquam optio autem suscipit. Nulla!',
      techs: [ 'linux', 'python' ]
    }
  ]


  return (
    <main className='max-w-1600 m-auto p-96 fade-in'>
      <section className="flex md-flex-col md-items-center justify-center items-start gap-40 pb-40 m-auto">
          <ImageLoader className='rounded-6 img-common' src="/best.jpeg" alt='projects' width={300} height={300} />
        <div>
          <h1 className='font-bold font-48 pb-40 text-gradient bg-gradient-4'>Simple and Optimistic</h1>
          <div className='color-2 line-height-2'>Hey there, I&apos;m <b>Ali Hassan</b> I started my career as Software Engineer in 2022 with Python. I am passionate about Programming, Mathematics, and Arts—these disciplines are not just skills I have acquired; they are my natural talents. Through spare time and freelance projects, I have immersed myself in learning, and at present, my proficiency leans more towards Frontend development than Backend. My programming philosophy revolves around simplicity, employing the &quot;divide and conquer&quot; rule to tackle complex problems methodically. Quick learning has always been one of my strengths, positioning me as the top performer among colleagues both at work and in academic settings.
            I firmly believe in my potential to take on any challenge and find solutions. While I acknowledge there might be areas where I am not as strong, in the realm of programming, I stand unmatched, especially when experience levels are comparable. In various instances, I have outpaced teachers and senior developers in terms of speed and efficiency.
            My unique approach to problem-solving involves simplifying complex issues, employing smart thinking strategies, and leveraging efficient web searching skills. I am not just a programmer; I am a problem solver, always ready to take on new challenges and surpass expectations.
          </div>
        </div>
      </section>

      <section className='flex md-flex-col-rev m-auto justify-between gap-40 color-4'>
        <div className='bg-color-4 p-16 min-w-300 rounded-6 m-auto h-fit'>
          <h1 className='py-12'>
            Skills
          </h1>
          <ul>
            {skills.map(skill => (
              <li key={skill.name} className='flex gap-10 bb-white-1 py-8'>
                <div className='min-w-90'>
                  <span className="flex gap-4 items-center w-fit px-4 py-2 nowrap bg-color-1 cap"><Image src={`/${skill.name}.svg`} alt={skill.name+'_logo'} width={16} height={16} /> {skill.name}</span>
                </div>
                <div className='flex flex-wrap gap-8'>
                  {skill.projects.map(project => (
                    <Link key={project.name} className='flex items-center gap-8' href={project.link}><Image src={'/github.svg'} alt='github_logo' width={16} height={16} />  <span className='ellipses font-mono font-14'>{project.name}</span></Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='bg-color-4 p-16 rounded-6'>
          <h1 className='py-12'>
            Experience
          </h1>
          <ul className='quote ml-30'>
            {experiences.map(experience => (
              <li className='flex gap-20' key={experience.name}>
                <Image className='bg-color-1 -ml-60' src={'/'+experience.logo} alt={experience.logo} width={40} height={40}/>
                <div>
                  <h3 className='mb-8 flex gap-20 items-start'>
                    {experience.name} @ {experience.inc}
                  </h3>
                  <i className='color-2'>
                  {experience.date} - {experience.time}
                  </i>
                  <div className='my-8 font-mono font-14 color-2'>
                    {experience.desc}
                  </div>
                  <div className='flex gap-10 items-center my-8'>
                    {experience.techs.map(tech => (
                      <span className='bg-color-1 flex gap-4 items-center w-fit px-4 py-2 cap' key={tech}><Image src={'/'+tech+'.svg'} alt={tech+'_logo'} width={16} height={16} />{tech}</span>
                    ))}
                  </div>
                </div>
              </li>
              ))}
          </ul>
        </div>
        
      </section>


    </main>
  )
}

export default About