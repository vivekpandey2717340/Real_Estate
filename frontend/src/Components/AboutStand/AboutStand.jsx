import React from 'react'
import './AboutStand.css'

const AboutStand = () => {
  return (
    <div className='container'>
       <div className="aboutStandTitle">
            <h1>
                Where we stand?
            </h1>
            <p>Check out our stats, and get a better idea of our position</p>
        </div>  
        <div className="aboutStandGrid">
            <div className="projects">
                <h1>100+</h1>
                <p>Projects we have <br /> completed in total</p>
            </div>
            <div className="projects">
                <h1>16+</h1>
                <p>Ongoing projects from <br /> our brightest clients</p>
            </div>
            <div className="projects">
                <h1>20+</h1>
                <p>Excellent staff <br />excelling in a particular field
                </p>
            </div>
            <div className="projects">
                <h1>1+</h1>
                <p>Years of exposure in <br /> the market as a team</p>
            </div>

        </div>       
    </div>
  )
}

export default AboutStand