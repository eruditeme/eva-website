import React from 'react'
import './project.css'
import ProjectCard from './ProjectCard';
import weatherImg from '../../assets/weatherImg.jpeg'
import townImg from '../../assets/townImg.png'
import easyChefGif from '../../assets/easyChefGif.gif'
import todolist from '../../assets/todolist.png'
import { FadeInSection } from '../about/FadeIn';

const Project = () => {


  return (
    <section id="projects">
      <FadeInSection>
        <h2 id='project-title'>Projects</h2>
      </FadeInSection>
        <div className="grid-container ">
          <FadeInSection>
            <ProjectCard 
              img = {easyChefGif}
              name='Easy Chef' 
              tech='Tech Stack: Django, React, SQL, HTML, CSS'
              github = 'https://github.com/eruditeme/EasyChef'
              descr = 'Easy Chef is a recipe sharing web application. With Easy Chef, you can search through recipes from various diets and ingredients from all over the world, share your custom recipe, as well as filter recipe ideas based on your needs. No need to worry about your grocery list either, Easy Chef takes care of that as well!'
            />
          </FadeInSection>
          <FadeInSection>
            <ProjectCard 
              img = {todolist}
              name='To Do App' 
              tech='Tech Stack: EJS, MongoDB, Express.js, HTML, CSS'
              github = 'https://github.com/eruditeme/toDoApp'
              demo = 'https://evening-wave-11303-56595dc7bb5c.herokuapp.com/'
              descr = "Tired of forgetting what you need to do for the day? Well, this to do list can help you solve just that. This to-do app empowers you to tailor your to-do lists according to your unique needs. Whether or not you need a list for school, work, or home, this app lets you to customize your lists however you wish."
            />
          </FadeInSection>
          <FadeInSection>
            <ProjectCard 
              img = {townImg}
              name='Town' 
              tech='Tech Stack: HTML Canvas, Javascript'
              github = "https://github.com/eruditeme/Town"
              demo = 'https://papaya-cendol-bd7840.netlify.app'
              descr = 'Inspired by Pokémon, Town is a game where you, the player, can walk around a small quiet town using the WASD keys. However, in certain areas, players will have a chance of encountering a draggle. When this occurs, a battle will be initiated.'
            />
          </FadeInSection>
          <FadeInSection>
            <ProjectCard 
              img = {weatherImg}
              name='Weatherman' 
              tech='Tech Stack: React, HTML, CSS, Bootstrap'
              github = 'https://github.com/eruditeme/easy-chef'
              demo = 'https://lamevang-weather-app.netlify.app/'
              descr = 'This weather app enables users to stay up-to-date on the current weather conditions in any city around the world. With this app, you can easily search for a city and get real-time information on the temperature, wind speed, and humidity levels.'
            />
          </FadeInSection>
        </div>
    </section>
  )
}

export default Project