import React from 'react'
import "./mobileSocials.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link } from "react-scroll"

const mobileSocials = () => {
  return (
    <div className='mobileSocials' id="mobileSocials">
        <h1 className='m-heading'>Socials</h1>
        <div className='m-socialsContainer'>
            <a className='m-socialItemContainer' href='https://twitter.com/usamamaqsood25' target="_blank">
                <TwitterIcon className='m-icon'/>
            </a>

            <a className='m-socialItemContainer' href='https://www.linkedin.com/in/usama-maqsood-43675a108' target="_blank">
                <LinkedInIcon className='m-icon'/>
            </a>

            <a className='m-socialItemContainer' href='https://github.com/U-M-97' target="_blank">
                <GitHubIcon className='m-icon'/>
            </a>

            <a className='m-socialItemContainer' href='https://www.facebook.com/hafizusama.maqsood/' target="_blank">
                <FacebookOutlinedIcon className='m-icon'/>
            </a>

            <a className='m-socialItemContainer' href='https://www.instagram.com/usamamaqsood97' target="_blank">
                <InstagramIcon className='m-icon'/>
            </a>
        </div>

        <div className='m-footer'>
            <div className='m-copyrightContainer'>
                <CopyrightIcon className='m-copyrightIcon'/>
                <span>Copyright Usama Maqsood</span>
            </div>
            <div className='m-designContainer'>
                <span>Designed By </span>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                 <span className='m-usamaLink'>Usama</span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default mobileSocials