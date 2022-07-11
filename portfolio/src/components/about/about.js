import React from 'react'
import "./about.css"
import profile from "../../images/profile.jpg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';

const about = () => {
  return (
    <div className='about' id="about">
      <h1 className='a-heading'>About</h1>
      <p className='a-paragraph'>Hy! I am a Software Engineer with expertise in full stack web development. I am a highly motivated, passionate and dedicated programmer with curiosity to learn new technologies.</p>
      <div className='a-aboutContainer'>
        <div className='a-aboutContainerItem'>
          <ArrowForwardIosIcon className='a-arrowIcon'/>
          <span>I like to develop large scale industry standard projects with great user experience</span>
        </div>

        <div className='a-aboutContainerItem'>
          <ArrowForwardIosIcon className='a-arrowIcon'/>
          <span>I am currently working on MERN stack</span>
        </div>

        <div className='a-aboutContainerItem'>
          <ArrowForwardIosIcon className='a-arrowIcon'/>
          <span>I love to play football and know how to swim. Fitness Freak</span>
        </div>

        <div className='a-bottom'>
          <div className='a-infoContainerItem'>
            <EmailIcon className='a-infoIcon'/>
            <span>hafizusamamaqsood@gmail.com</span>
          </div>

          <div className='a-infoContainerItem'>
            <LocationOnIcon className='a-infoIcon'/>
            <span>Islamabad | Pakistan</span>
          </div>

          <div className='a-infoContainerItem'>
            <CallIcon className='a-infoIcon'/>
            <span>+ 92 332 6386638</span>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default about