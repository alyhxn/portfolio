import React from 'react'
import ImageLoader from '../components/ImageLoader'

const About = () => {
  return (
    <main className='max-w-1600 m-auto p-96 fade-in'>
      <section className="flex md-flex-col items-center justify-center gap-40 pb-40 max-w-1200 m-auto">
          <ImageLoader className='rounded-6 img-common' src="/best.jpeg" alt='projects' width={300} height={300} />
        <div>
          <h1 className='font-bold font-48 pb-40 text-gradient bg-gradient-4'>Simple and Optimistic</h1>
          <div className='color-2 line-height-2'>Hey there, I&apos;m <b>Ali Hassan</b> I started my career as Software Engineer in 2022 with Python. I am passionate about Programming, Mathematics, and Arts—these disciplines are not just skills I have acquired; they are my natural talents. Through spare time and freelance projects, I have immersed myself in learning, and at present, my proficiency leans more towards Frontend development than Backend.</div>
        </div>
      </section>

      <article>
        <div className='color-2 line-height-2 max-w-800 m-auto qoute'>
          My programming philosophy revolves around simplicity, employing the &quot;divide and conquer&quot; rule to tackle complex problems methodically. Quick learning has always been one of my strengths, positioning me as the top performer among colleagues both at work and in academic settings.
          I firmly believe in my potential to take on any challenge and find solutions. While I acknowledge there might be areas where I am not as strong, in the realm of programming, I stand unmatched, especially when experience levels are comparable. In various instances, I have outpaced teachers and senior developers in terms of speed and efficiency.
          My unique approach to problem-solving involves simplifying complex issues, employing smart thinking strategies, and leveraging efficient web searching skills. I am not just a programmer; I am a problem solver, always ready to take on new challenges and surpass expectations.
        </div>
      </article>
    </main>
  )
}

export default About