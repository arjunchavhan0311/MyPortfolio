import React from 'react'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Process from './components/Process'
import Project from './components/Project'
import Approach from './components/Approach'
import Blog from './components/Blog'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Marque from './components/Marque'
import TeachStack from './components/TeachStack'
import Lang from './components/Lang'
import Education from './components/Education'
import Extra from './components/Extra'
import MouseFollower from './components/MouseFollower'

const App = () => {
  return (
    <div>



      <MouseFollower />
      <Nav />
      <HeroSection />
      <About />
      <Extra />
      <TeachStack />
      <Education />

      <Process />
      <Project />
      <Approach />
      <Blog />
      <Marque />
      <Services />

      {/* <Testimonial /> */}
      <Contact />
    </div>
  )
}

export default App