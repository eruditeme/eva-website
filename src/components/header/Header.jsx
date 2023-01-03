import React from 'react'
import './header.css'
import SPACE from '../../assets/ufo.png'
import Typed from 'react-typed'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="typing">
          <Typed 
            strings={["hello, Evangeline here."]}
            typeSpeed={80}
          />
        </div>
        <h3 id="ido">Welcome to my portfolio page</h3>
        <div id="hi">
          <a href="mailto:evangelineyiqin@gmail.com" className='btn'>Contact Me</a>
        </div>
        
      </div>
      <img id="spaceship" src={SPACE} alt="space" />
    </header>
  )
}

export default Header