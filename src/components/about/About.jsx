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
                <li>SQL</li>
                <li>Next.js</li>
                <li>Assembly</li>
                <li>React</li>
                <li>Go</li>
              </ul>
            </div>

            <p className='bios'>
              Outside of work and academics, I enjoy creating digital art,
              playing video games, and learning new languages. 
            </p>
          </div>
          <div class="loader">
            <div class="box box-1">
              <div class="side-left"></div>
              <div class="side-right"></div>
              <div class="side-top"></div>
            </div>
            <div class="box box-2">
              <div class="side-left"></div>
              <div class="side-right"></div>
              <div class="side-top"></div>
            </div>
            <div class="box box-3">
              <div class="side-left"></div>
              <div class="side-right"></div>
              <div class="side-top"></div>
            </div>
            <div class="box box-4">
              <div class="side-left"></div>
              <div class="side-right"></div>
              <div class="side-top"></div>
            </div>
          </div>
        </div>
      </FadeInSection>
      <hr></hr>
    </section>
  )
}

export default About