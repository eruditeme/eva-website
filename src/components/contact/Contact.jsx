import React from 'react'
import './contact.css'
import {BsInstagram, BsLinkedin, BsGithub} from 'react-icons/bs'
import { IconContext } from "react-icons";

const Contact = () => {
  return (
    <section id= "contact">
        <hr></hr>
        <h2 id="contact-title">Contact Me</h2>
        <div className='socials'>
            <a href="http://ca.linkedin.com/in/lamevang" target="_blank" rel="noopener noreferrer">
                <IconContext.Provider value={{ className: "shared-class", size: 25 }}>
                    <>
                        <BsLinkedin />
                    </>
                </IconContext.Provider>
            </a>
            <a href="https://instagram.com/_eva_lam_" target="_blank" rel="noopener noreferrer">
                <IconContext.Provider value={{ className: "shared-class", size: 25 }}>
                    <>
                        <BsInstagram />
                    </>
                </IconContext.Provider>
            </a>
            <a href="http://github.com/eruditeme" target="_blank" rel="noopener noreferrer">
                <IconContext.Provider value={{ className: "shared-class", size: 25 }}>
                    <>
                        <BsGithub />
                    </>
                </IconContext.Provider>
            </a>
        </div>
    </section>
  )
}

export default Contact