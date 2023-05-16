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
            <a className="social-space" href="http://ca.linkedin.com/in/lamevang" target="_blank" rel="noopener noreferrer">
                <IconContext.Provider value={{ className: "shared-className", size: "1.8rem" }}>
                    <>
                        <BsLinkedin />
                    </>
                </IconContext.Provider>
            </a>
            <a className="social-space" href="https://instagram.com/_eva_lam_" target="_blank" rel="noopener noreferrer">
                <IconContext.Provider value={{ className: "shared-className", size: "1.8rem" }}>
                    <>
                        <BsInstagram />
                    </>
                </IconContext.Provider>
            </a>
            <a href="http://github.com/eruditeme" target="_blank" rel="noopener noreferrer">
                <IconContext.Provider value={{ className: "shared-class", size: "1.8rem" }}>
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