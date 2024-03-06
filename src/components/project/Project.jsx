import React from 'react'
import './project.css'
import ProjectCard from './ProjectCard';
import todolist from '../../assets/todolist.png'
import { FadeInSection } from '../about/FadeIn';
import easyChefGif2 from "../../assets/easygif3.gif"
import paws from "../../assets/paws.png"
import deerhacks from "../../assets/deerhacks.png"

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
              img = {deerhacks}
              name='Deerhacks V3' 
              tech='Built using Go (Programming Language)'
			  github = 'https://github.com/utmmcss/deerhacks-backend'
              demo = 'https://deerhacks.ca/'
              descr = "DeerHacks is University of Toronto Mississauga's largest annual hackathon organized by the Mathematical and Computational Sciences Society (MCSS). Deerhacks V3 received 1000+ applicants and generated 50,000+ website visitors."
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
              img = {todolist}
              name='To Do App' 
              tech='Built using EJS, MongoDB, Express.js, HTML, CSS'
              github = 'https://github.com/eruditeme/toDoApp'
              demo = 'https://evening-wave-11303-56595dc7bb5c.herokuapp.com/'
              descr = "Tired of forgetting what you need to do for the day? Well, this to do list can help you solve just that. This to-do app empowers you to tailor your to-do lists according to your unique needs. Whether or not you need a list for school, work, or home, this app lets you to customize your lists however you wish."
            />
          </FadeInSection>
        </div>
    </section>
  )
}

export default Project