import React from 'react'
import './about.css'
import { FadeInSection } from './FadeIn'

const About = () => {
  return (
    <section id= "about">
      <FadeInSection>
        <h2>About Me</h2>
        <div className='about__container'>
          <div id="bio">
            <p className='bios'>
              Hey, I'm Evangeline, a fourth year UofT student doing a double major in Computer Science and 
              Geographical Information Systems, as well as a minor in Economics.
            </p>

            <div className='bios'>

              <p>Here are a few technologies that I have been working with:</p>
              <ul>
                <li>Python</li>
                <li>PostgreSQL</li>
                <li>JavaScript</li>
                <li>HTML, CSS</li>
                <li>React</li>
                <li>Django</li>
              </ul>
            </div>

            <p className='bios'>
              Outside of work and academics, I enjoy creating digital art,
              playing video games, and watching space documentaries. 
            </p>
          </div>
          <div className='about__me-image'>
              
          </div>
        </div>
      </FadeInSection>
      <hr></hr>
    </section>
  )
}

export default About