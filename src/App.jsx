import React from 'react'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import About from './components/about/About'
import Project from './components/project/Project'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'


const App = () => {
  return (
    <>
        <Nav />
        <Header />
        <About />
        <Project />
        <Contact />
        <Footer />
    </>
  )
}

export default App