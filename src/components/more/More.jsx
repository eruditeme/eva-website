import React from 'react';
import "./more.css";
import MoreCard from './MoreCard';
import { FadeInSection } from '../about/FadeIn';

const More = () => {
    return (
        <section id="more">
            <FadeInSection><h2 id='more-title'>More Projects...</h2></FadeInSection>
            <FadeInSection>
                <div className='cards'>
                    <MoreCard
                        github="https://github.com/eruditeme/SustainableHabitat"
                        title = "Sustainable Habitat"
                        description = "A python script that can be run on ArcGIS Pro in order to find suitable habitat areas for bobcats"
                        stack = "Python"
                    />
                    <MoreCard
                        github="https://github.com/eruditeme/Town"
                        deploy="https://papaya-cendol-bd7840.netlify.app/"
                        title = "Town"
                        description = "A monster battle game that spawns monsters on random when the player enters battle zones"
                        stack = "HTML Canvas, Javascript"
                    />
                    <MoreCard
                        github="https://github.com/eruditeme/Simon-Game"
                        deploy="https://eruditeme.github.io/Simon-Game/"
                        title = "Simon"
                        description = "Based on the popular electronic memory game Simon, this game challenges players to remember and reproduce a sequence of lights and sounds"
                        stack = "Javascript, HTML, CSS"
                    />
                    <MoreCard
                        github="https://github.com/eruditeme/eva-website"
                        title = "My portfolio website"
                        description = "My portfolio website that you are currently viewing :)"
                        stack = "React, HTML, CSS"
                    />
                </div>
            </FadeInSection>
            
        </section>
    )
}

export default More;