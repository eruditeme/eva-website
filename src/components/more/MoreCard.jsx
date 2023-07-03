import "./moreCard.css";
import React from "react";
import {FaGithub} from "react-icons/fa";
import { IconContext } from "react-icons";
import {AiOutlineDeploymentUnit} from "react-icons/ai"

function MoreCard(props) {
    return (
        <div className="cardBackground">
            <div className="cardIcons">
                {props.github && <a className="social-space" href={props.github} target="_blank" rel="noopener noreferrer">
                    <IconContext.Provider value={{ size: "1.4rem" }}>
                        <>
                            <FaGithub/>
                        </>
                    </IconContext.Provider>
                </a>}
                {props.deploy && <a className="social-space" href={props.deploy} target="_blank" rel="noopener noreferrer">
                    <IconContext.Provider value={{ size: "1.4rem" }}>
                        <>
                            <AiOutlineDeploymentUnit/>
                        </>
                    </IconContext.Provider>
                </a>}
            </div>
            <div id="cardTitle" className="cardContent">
                {props.title}
            </div>
            <div className="cardContent cardBody">
                {props.description}
            </div>
            <div id ="cardBottom" className="cardContent cardBody">
                {props.stack}
            </div>
        </div>
    )
}

export default MoreCard;