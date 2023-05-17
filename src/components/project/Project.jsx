import React from 'react'
import './project.css'
import ProjectCard from './ProjectCard';
import easyChefImg from '../../assets/easyChefImg.png'
import weatherImg from '../../assets/weatherImg.jpeg'
import simonImg from '../../assets/simonImg.png'
import townImg from '../../assets/townImg.png'

const Project = () => {

  return (
    <section id="projects">
      <h2 id='project-title'>Projects</h2>
        <div className="grid-container ">
          <ProjectCard 
            img = {easyChefImg}
            name='Easy Chef' 
            tech='Built using Django, Node.js, React, SQL, HTML, CSS, Bootstrap'
            github = 'https://github.com/eruditeme/easy-chef'
            descr = 'Easy Chef is a recipe sharing web application. With Easy Chef, you can search through recipes from various diets and ingredients from all over the world, share your custom recipe with everyone, as well as filter recipe ideas based on your needs!'
          />
          <ProjectCard 
            img = {weatherImg}
            name='Weatherman' 
            tech='Built using React, OpenWeather API, HTML, CSS, Bootstrap'
            github = 'https://github.com/eruditeme/easy-chef'
            demo = 'https://lamevang-weather-app.netlify.app/'
            descr = 'This weather app enables users to stay up-to-date on the current weather conditions in any city around the world. With this app, you can easily search for a city and get real-time information on the temperature, pressure, wind speed, and humidity levels.'
          />
          <ProjectCard 
            img = {simonImg}
            name='Simon' 
            tech='Built using HTML, CSS, jQuery (JavaScript)'
            github = 'https://github.com/eruditeme/Simon-Game'
            demo = 'https://eruditeme.github.io/Simon-Game/'
            descr = 'Simon is a game designed to test and improve a player"s memory and cognitive skills. The game consists of a small electronic console with four colored buttons, each of which produces a unique sound when pressed.'
          />
          <ProjectCard 
            img = {townImg}
            name='Town' 
            tech='Built using HTML Canvas'
            demo = 'https://papaya-cendol-bd7840.netlify.app'
            descr = 'Town is a game where you, the player, can walk around a small quiet town using the WASD keys. However, in certain areas, players will have a chance of encountering a draggle. When this occurs, a battle will be initiated. Deployed using Netlify.'
          />
        </div>
    </section>
  )
}

export default Project