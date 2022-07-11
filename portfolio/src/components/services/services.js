import React from 'react'
import "./services.css"
import html from "../../images/html.png"
import css from "../../images/css.png"
import javascript from "../../images/javascript.png"
import react from "../../images/react.png"
import node from "../../images/node.png"
import mongodb from "../../images/mongodb.png"
import frontend from "../../images/frontend.png"
import backend from "../../images/backend.png"
import fullstack from "../../images/fullstack.png"
import web from "../../images/web.png"

const services = () => {
  return (
    <div className='services' id='services'>
        <h1 className='s-heading'>Services</h1>
        <div className='s-servicesWrapper'>
            <div className='s-servicesContainer'>
                <div className='s-servicesItems'>
                    <img src={html} className="s-icons"/>
                    <span>HTML</span>
                </div>

                <div className='s-servicesItems'>
                    <img src={javascript} className="s-icons"/>
                    <span>JAVASCRIPT</span>
                </div>

                <div className='s-servicesItems'>
                    <img src={node} className="s-icons"/>
                    <span>NODE</span>
                </div>

                <div className='s-servicesItems'>
                    <img src={frontend} className="s-icons"/>
                    <span>FRONT-END</span>
                </div>

                <div className='s-servicesItems'>
                    <img src={fullstack} className="s-icons"/>
                    <span>FULL STACK DEVELOPMENT</span>
                </div>
                
            </div>

            <div className='s-servicesContainer'>
                
                <div className='s-servicesItems'>
                    <img src={css} className="s-icons"/>
                    <span>CSS</span>
                </div>   

                <div className='s-servicesItems'>
                    <img src={react} className="s-icons"/>
                    <span>REACT</span>
                </div>

                <div className='s-servicesItems'>
                    <img src={mongodb} className="s-icons"/>
                    <span>MONGODB</span>
                </div>

                <div className='s-servicesItems'>
                    <img src={backend} className="s-icons"/>
                    <span>BACK-END</span>
                </div>

                <div className='s-servicesItems'>
                    <img src={web} className="s-icons"/>
                    <span>WEB DEVELOPMENT</span>
                </div> 

            </div>
        </div>
              
    </div>
  )
}

export default services