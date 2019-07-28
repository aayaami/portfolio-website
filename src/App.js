import React from 'react'
import Navbar from './components/layout/Navbar'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
