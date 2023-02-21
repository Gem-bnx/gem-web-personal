import React, { useState } from 'react'
import './App.css'
import About from './components/About';
import Banner from './components/Banner';
import NavBar from './components/NavBar'
import Projects from './components/Projects';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  // const [scroll, setScroll] = useState(false)
  return (
      <>
        <div className='wrapper'>
          <NavBar></NavBar>
          <Banner></Banner>
          <About></About>
          <Projects Project={Project}></Projects>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </>
  )
}

export default App