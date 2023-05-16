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

          <div className='bios'>

            <p>Here are a few technologies that I have been working with:</p>
            <ul>
              <li>Python</li>
              <li>MySQL</li>
              <li>jQuery (JavaScript) </li>
              <li>HTML, CSS, Bootstrap</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>

          <p className='bios'>
            Outside of work and academics, I enjoy creating digital art, listening to music,
            and playing video games. My favorite video games of all time would be Persona 5 ☕ and Stardew Valley 🌻,
            but you can probably catch me playing Tetris 🕹️🧱 and Teamfight Tactics ⚔️ most of the time.
          </p>
        </div>
        <div className='about__me-image'>
            
        </div>
      </div>
      <hr></hr>
    </section>
  )
}

export default About