import React from 'react'
import '../about/About'
import '../project/Project'
import '../contact/Contact'
import './navi.css'

const Navi = () => {
  return (
    <div id='nav'>
        <a href='#about' class='nav-ele'>About</a>
        <a href='#projects' class='nav-ele'>Projects</a>
        <a href='#contact'>Contact</a>
    </div>
  )
}

export default Navi