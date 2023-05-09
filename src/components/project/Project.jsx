import React from 'react'
import './project.css'
import "swiper/css";
import "swiper/css/navigation";

const Project = () => {
  return (
    <section id="projects">
      <h2 id='project-title'>Projects</h2>
          <div className="project-container">
            <h2 class="project-name">Easy Chef</h2>
            <p class="project-desc">
              Easy Chef is a recipe sharing web application. 
              With Easy Chef, you can search through millions of different 
              recipes from various diets and ingredients from all over the world, 
              share your custom recipe with everyone, 
              like and comment on recipes, as well as filter recipe ideas based 
              on your needs! You don't need to worry about the shopping list either; 
              Easy Chef takes care of that as well!
            </p>
            <p class="project-desc">Built using Django, Node.js, React, SQL, HTML, CSS, Bootstrap</p>
            <a href="https://github.com/eruditeme/easy-chef" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
          </div>
          <div className="project-container">
            <h2 class="project-name">Weather App</h2>
            <p class="project-desc">
              This weather app enables users to stay up-to-date on the current 
              weather conditions in any city around the world. With this app, you can 
              easily search for a city and get real-time information on the temperature, 
              pressure, wind speed, and humidity levels.
            </p>
            <p class="project-desc">Built using React, OpenWeather API, HTML, CSS, Bootstrap</p>
            <a href="https://lamevang-weather-app.netlify.app/" className='btn' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
          <div className="project-container">
            <h2 class="project-name">Simon</h2>
              <p class="project-desc">
                Simon is a game designed to test and improve a player's memory and cognitive skills. 
                The game consists of a small electronic console with four colored buttons, 
                each of which produces a unique sound when pressed.
              </p>
              <p class="project-desc">Built using HTML, CSS, jQuery (JavaScript)</p>
              <a href="https://github.com/eruditeme/Simon-Game" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
              <a href="https://eruditeme.github.io/Simon-Game/" className='btn' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
          <div className="project-container">
            <h2 class="project-name">Town</h2>
              <p class="project-desc">
                A game where the player can walk around the town using the WASD keys. Deployed using Netlify.
              </p>
              <p class="project-desc">Built using HTML Canvas</p>
              <a href="https://github.com/eruditeme/Town" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
              <a href="https://papaya-cendol-bd7840.netlify.app" className='btn' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
    </section>
  )
}

export default Project