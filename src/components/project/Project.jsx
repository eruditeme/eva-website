import React from 'react'
import './project.css'
import ONE from "../../assets/cozygamecover.jpeg.png"

const Project = () => {
  return (
    <section id="projects">
      <h2 id='project-title'>Projects</h2>
      <div className="project__container">
        <article className="project__item">
          <h3>Cozy Town</h3>
          <p>
            A game where the player can walk around cozy town and battle evil vegetables at
            battle zones.
          </p>
          <p>
            Built using HTML Canvas
          </p>
          <a href="https://github.com/eruditeme/cozyBattleGame" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://papaya-cendol-bd7840.netlify.app/" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
        </article>
        <article className="project__item">
          <div className='project__item-image'>
            <img src={ONE} alt="project 1" />
          </div>
          <a href="https://www.github.com/" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://www.github.com/" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Project