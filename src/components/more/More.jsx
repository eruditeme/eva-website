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
                        github="https://github.com/eruditeme/petStay"
                        title = "Paws Pet Sitting"
                        description = "Paws Pet Sitting is a full stack web application that allows you to find the perfect pet sitter for your pet while you are away"
                        stack = "Next.js, MongoDB, Tailwind, Prisma"
                    />
                    <MoreCard
                        github="https://github.com/eruditeme/SustainableHabitat"
                        title = "Sustainable Habitat"
                        description = "A python script that can be run on ArcGIS Pro in order to find suitable habitat areas for bobcats"
                        stack = "Python"
                    />
                    <MoreCard
                        github="https://github.com/eruditeme/Simon-Game"
                        deploy="https://eruditeme.github.io/Simon-Game/"
                        title = "Simon"
                        description = "Based on the popular electronic memory game Simon, this game challenges players to remember and reproduce a sequence of lights and sounds"
                        stack = "Javascript, HTML, CSS"
                    />
                </div>
            </FadeInSection>
            
        </section>
    )
}

export default More;