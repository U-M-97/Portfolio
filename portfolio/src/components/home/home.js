import React from 'react'
import "./home.css"
import Typewriter from 'typewriter-effect';

const home = () => {
  return (
    <div className='home' id='home'>
      <div className='h-overlay'>
      </div>
        <h1 className='h-Name'>Usama Maqsood</h1>
        <div className='h-Skill'>
          <div className='h-typewriter'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                .typeString("Web Developer ").pauseFor(2000).deleteAll().start()
              } }
              options={{
                autoStart: true,
                loop: true
              }}
            />
          </div>
        
        </div>
      
    </div>
  )
}

export default home