import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'

const About = () => {
  return (
    <section id= "about">
      <h2>About Me</h2>
      <div className='about__container'>
        <div id="bio">
          <p className='bios'>
            Hey, I'm Evangeline, a fourth year student studying Computer Science and 
            Geographical Information Systems at University of Toronto.
          </p> 

          <p className='bios'>
            
            Some of my interests are in
            Web Development 👩‍💻, Machine Learning 🤖🧠, and UX Design 🎨.
          </p>

          <p className='bios'>

            Here are a few technologies that I have been working with:
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>C</li>
              <li>HTML, CSS</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </p>

          <p className='bios'>
            
            Outside of work and academics, I enjoy playing video games, listening to music, and 
            creating digital art.
          </p>
        </div>
        <div className='about__me-image'>
            <img src= {ME} alt="About Me"></img>
        </div>
      </div>
      <hr></hr>
    </section>
  )
}

export default About