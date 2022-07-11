import React from 'react'
import "./navbarMobile.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react"
import { Link } from "react-scroll"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import EmailIcon from '@mui/icons-material/Email';
import Profile from "../../images/profile.png"
import LinkIcon from '@mui/icons-material/Link';

const NavbarMobile = () => {

  const [active , setActive ] = useState(false)

  const handleClick = () => { 
    setActive(!active)
    console.log(active)
  }

  return (
    <div className='navbarMobile'>
      <div className='hamburgerWrapper'>
        {
          active ? <CloseIcon className="hamburger" onClick={handleClick}/> :  <MenuIcon className='hamburger' onClick={handleClick}/>
        } 
      </div>
     {
      active ?
      <div className='n-sectionsList'>

      <div className='n-ProfilePicContainer'>
        <img src={Profile} className="n-pic"/>
      </div>
      
      <Link
        className="n-sectionsListItem"
        to="home"
        spy={true}
        smooth={true}
        offset={-60}
        duration={500}
        onClick={handleClick}
      >
          <HomeOutlinedIcon className='n-sectionIcon'/>
          <span className="n-sectionIconName">Home</span>
      </Link>

      <Link
        className="n-sectionsListItem"
        to="about"
        spy={true}
        smooth={true}
        offset={-30}
        duration={500}
        onClick={handleClick}
      >
          <AccountCircleOutlinedIcon className='n-sectionIcon'/>
          <span className="n-sectionIconName">About</span>
      </Link>

      <Link
        className="n-sectionsListItem"
        to="resume"
        spy={true}
        smooth={true}
        offset={-60}
        duration={500}
        onClick={handleClick}
      >
          <InsertDriveFileOutlinedIcon className='n-sectionIcon'/>
          <span className="n-sectionIconName">Resume</span>
      </Link>
         
      <Link
        className="n-sectionsListItem"
        to="projects"
        spy={true}
        smooth={true}
        offset={-30}
        duration={500}
        onClick={handleClick}
      >
          <CodeOutlinedIcon className='n-sectionIcon'/>
          <span className="n-sectionIconName">Projects</span>
      </Link>

      <Link
        className="n-sectionsListItem"
        to="services"
        spy={true}
        smooth={true}
        offset={-30}
        duration={500}
        onClick={handleClick}
      >
          <SplitscreenIcon className='n-sectionIcon'/>
          <span className="n-sectionIconName">Services</span>
      </Link>
          
      <Link
        className="n-sectionsListItem"
        to="contact"
        spy={true}
        smooth={true}
        offset={-60}
        duration={580}
        onClick={handleClick}
      >
          <EmailIcon className='n-sectionIcon'/>
          <span className="n-sectionIconName">Contact</span>
      </Link>

      <Link
        className="n-sectionsListItem"
        to="mobileSocials"
        spy={true}
        smooth={true}
        offset={-60}
        duration={580}
        onClick={handleClick}
      >
          <LinkIcon className='n-sectionIcon'/>
          <span className="n-sectionIconName">Socials</span>
      </Link>
        </div> : null
   
     }
      
    </div>
  )
}

export default NavbarMobile