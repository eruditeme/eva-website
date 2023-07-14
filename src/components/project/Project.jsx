import React from 'react'
import './project.css'
import ProjectCard from './ProjectCard';
import weatherImg from '../../assets/weatherImg.jpeg'
import todolist from '../../assets/todolist.png'
import { FadeInSection } from '../about/FadeIn';
import easyChefGif2 from "../../assets/easygif3.gif"
import paws from "../../assets/paws.png"

const Project = () => {


  return (
    <section id="projects">
      <FadeInSection>
        <h2 id='project-title'>Projects</h2>
      </FadeInSection>
        <div className="grid-container ">
          <FadeInSection>
            <ProjectCard 
              img = {easyChefGif2}
              name='Easy Chef' 
              tech='Built using Django, React, SQL, HTML, CSS'
              github = 'https://github.com/eruditeme/EasyChef'
              descr = 'Easy Chef is a recipe sharing web application. With Easy Chef, you can search through recipes from various diets and ingredients from all over the world, share your custom recipe, as well as filter recipe ideas based on your needs. No need to worry about your grocery list either, Easy Chef takes care of that as well!'
            />
          </FadeInSection>
          <FadeInSection>
            <ProjectCard 
              img = {todolist}
              name='To Do App' 
              tech='Built using EJS, MongoDB, Express.js, HTML, CSS'
              github = 'https://github.com/eruditeme/toDoApp'
              demo = 'https://evening-wave-11303-56595dc7bb5c.herokuapp.com/'
              descr = "Tired of forgetting what you need to do for the day? Well, this to do list can help you solve just that. This to-do app empowers you to tailor your to-do lists according to your unique needs. Whether or not you need a list for school, work, or home, this app lets you to customize your lists however you wish."
            />
          </FadeInSection>
          <FadeInSection>
            <ProjectCard 
              img = {paws}
              name='Paws Pet Sitting' 
              tech='Built using Next.js, MongoDB, Tailwind, Prisma'
              github = "https://github.com/eruditeme/petStay"
              descr = 'Paws Pet Sitting is a pet sitting website that connects pet owners with reliable and caring pet sitters in their local area. Whether you have a busy work schedule, or simply need someone to look after your pet, Paws Pet Sitting is here to help.'
            />
          </FadeInSection>
          <FadeInSection>
            <ProjectCard 
              img = {weatherImg}
              name='Weatherman' 
              tech='Built using React, HTML, CSS, Bootstrap, Weather API'
              demo = 'https://lamevang-weather-app.netlify.app/'
              descr = 'This weather app enables users to stay up-to-date on the current weather conditions in any city around the world. With this app, you can easily search for a city and get real-time information on the temperature, wind speed, and humidity levels.'
            />
          </FadeInSection>
        </div>
    </section>
  )
}

export default Project