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
              <h2 class="project-name">Cozy Town</h2>
              <p class="project-desc">
                A game where the player can walk around cozy town and battle evil vegetables at
                battle zones.
              </p>
              <p class="project-desc">Built using HTML Canvas</p>
              <a href="https://github.com/eruditeme/cozyBattleGame" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
              <a href="https://papaya-cendol-bd7840.netlify.app/" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class='project_item'>
              <h2 class="project-name">Cozy Town</h2>
              <img src={ONE} alt="project 1" />
              <p class="project-desc">
                A game where the player can walk around cozy town and battle evil vegetables at
                battle zones.
              </p>
              <p class="project-desc">Built using HTML Canvas</p>
              <a href="https://www.github.com/" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
              <a href="https://www.github.com/" className='btn' target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 1</SwiperSlide>
        </Swiper>
    </section>
  )
}

export default Project