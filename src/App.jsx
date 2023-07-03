import React from 'react'
import Navi from './components/navi/Navi'
import Header from './components/header/Header'
import About from './components/about/About'
import Project from './components/project/Project'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import More from './components/more/More'


const App = () => {
  return (
    <>
        <Navi />
        <Header />
        <About />
        <Project />
        <More />
        <Contact />
        <Footer />
    </>
  )
}

export default App