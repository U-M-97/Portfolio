import React from 'react'
import Sidebar from './components/Sidebar/sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/home'
import "./App.css"
import About from './components/about/about'
import Resume from './components/resume/resume'
import Projects from "./components/projects/projects"
import Services from "./components/services/services"
import Contact from "./components/contact/contact"
import NavbarMobile from './components/navbarMobile/navbarMobile'
import MobileSocials from './components/mobileSocials/mobileSocials'

const App = () => {

  return ( 
    
      <div className='container'>
        <div className='sideBarContainer'>
          <Sidebar/>
          <NavbarMobile/>
        </div>
        
        <div className='componentsContainer'>
          <Home/>
          <About/>
          <Resume/>
          <Projects/>
          <Services/>
          <Contact/>
          <MobileSocials/>
        </div>
      </div>
    
  )
}

export default App