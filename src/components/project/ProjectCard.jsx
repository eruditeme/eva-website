import React from "react";
import './projectCard.css';

function ProjectCard(props) {
    const { github } = props;
    const { demo } = props;

    return (
        <div className="project-container">
            <div className="imgContainer"><img src = {props.img} alt="Project Cover"></img></div>
            <h2 className="project-name">{props.name}</h2>
            <p className="project-desc">{props.descr}</p>
            <p className="project-desc">{props.tech}</p>
            {github && <a href={github} className='btn' target="_blank" rel="noopener noreferrer">GitHub</a>}
            {demo && <a href={demo} className='btn' target="_blank" rel="noopener noreferrer">Live Demo</a>}
        </div>
    );
}

export default ProjectCard;