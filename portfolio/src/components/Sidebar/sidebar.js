import React from 'react'
import "./sidebar.css"
import image from "../../images/profile.png"
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-scroll"
import CopyrightIcon from '@mui/icons-material/Copyright';

const sidebar = () => {

  return (
    <div className="sidebar">
        <div className="s-imgContainer">
            <div className="s-imageBackground">
                <img src={image} className="s-image"/>
            </div>
        </div>
        <div className="nameContainer">
         <h1 className="s-name">Usama Maqsood</h1>
        </div>
        <div className="s-socials">

            <a href='https://twitter.com/usamamaqsood25' target="_blank" className="socialItemContainer">
                <TwitterIcon className='s-icon'/>
            </a>
            
            <a  className="socialItemContainer" href='https://www.linkedin.com/in/usama-maqsood-43675a108' target="_blank">
                <LinkedInIcon className='s-icon'/>
            </a>
            <a href='https://github.com/U-M-97' target="_blank" className="socialItemContainer">
                <GitHubIcon className='s-icon'/>
            </a>
            <a href='https://www.facebook.com/hafizusama.maqsood/' target="_blank" className="socialItemContainer">
                <FacebookOutlinedIcon className='s-icon'/>
            </a>
            <a href='https://www.instagram.com/usamamaqsood97' target="_blank" className="socialItemContainer">
                <InstagramIcon className='s-icon'/>
            </a>
        </div>

        <div className="s-sections">
            <ul className='s-sectionsList'>
                <Link
                  className="s-sectionsListItem"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                    <HomeOutlinedIcon className='s-sectionIcon'/>
                    <span className="s-sectionIconName">Home</span>
                </Link>

                <Link
                  className="s-sectionsListItem"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                    <AccountCircleOutlinedIcon className='s-sectionIcon'/>
                    <span className="s-sectionIconName">About</span>
                </Link>

                <Link
                  className="s-sectionsListItem"
                  to="resume"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                    <InsertDriveFileOutlinedIcon className='s-sectionIcon'/>
                    <span className="s-sectionIconName">Resume</span>
                </Link>
                   
                <Link
                  className="s-sectionsListItem"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                    <CodeOutlinedIcon className='s-sectionIcon'/>
                    <span className="s-sectionIconName">Projects</span>
                </Link>

                <Link
                  className="s-sectionsListItem"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                    <SplitscreenIcon className='s-sectionIcon'/>
                    <span className="s-sectionIconName">Services</span>
                </Link>
                    
                <Link
                  className="s-sectionsListItem"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={580}
                >
                    <EmailIcon className='s-sectionIcon'/>
                    <span className="s-sectionIconName">Contact</span>
                </Link>
            </ul>
        </div>

        <div className='s-Footer'>
            <div className='s-footerTop'>
                <CopyrightIcon className='s-copyrightIcon'/>
                <span className='s-FooterSpanCopyright'>Copyright</span>
                <span className='s-FooterSpanName'>Usama Maqsood</span>
            </div>

            <div className='s-footerBottom'>
                <span>Designed By</span>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                    <span className='s-footerSpanUsama'>Usama</span>
                </Link>
               
            </div>
        </div>
    </div>
  )
}

export default sidebar