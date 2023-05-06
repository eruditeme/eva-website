import React from 'react'
import './project.css'
import ONE from "../../assets/cozygamecover.jpeg.png"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Project = () => {
  return (
    <section id="projects">
      <h2 id='project-title'>Projects</h2>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div class='project_item'>
              <h2 class="project-name">Easy Chef</h2>
              <p class="project-desc">
                Easy Chef is a recipe sharing web application. 
                With Easy Chef, you can search through millions of different recipes 
                from various diets and ingredients from all over the world! You can 
                also share your custom recipe with everyone, like and comment on recipes, 
                as well as filter recipe ideas based on your needs! You don't need to worry 
                about the shopping list either; Easy Chef takes care of that as well!
              </p>
              <p class="project-desc">Built using Django, Node.js, React, SQL, HTML, CSS, Bootstrap</p>
              <a href="https://github.com/eruditeme/easy-chef" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class='project_item'>
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
          </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default Project