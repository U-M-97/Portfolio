import React from 'react'
import "./projects.css"
import project1 from "../../images/Project1.png"
import project2 from "../../images/Project2.png"

const projects = () => {
  return (
    <div className='projects' id='projects'>
        <h1 className='p-heading'>Projects</h1>
        <div className='p-projectsContainer'>

          <a className='p-projectsItem' href='https://e-commerce97.herokuapp.com/' target="_blank">
            <img src={project1} className="p-1"/>
            <h2 className='p-projectTitle'>E-Commerce</h2>
            <div className='p-overlay'></div>
          </a>

          <a className='p-projectsItem'>
           <img src={project2} className="p-1"/>
           <h2 className='p-projectTitle'>Todo List</h2>
           <div className='p-overlay'></div>
          </a>

        </div>
    </div>
  )
}

export default projects