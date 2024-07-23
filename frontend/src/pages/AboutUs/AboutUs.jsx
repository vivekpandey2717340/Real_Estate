import React from 'react'
import AboutBanner from '../../Components/AboutBanner/AboutBanner'
import AboutDescription from '../../Components/AboutDescription/AboutDescription'
import AboutStand from '../../Components/AboutStand/AboutStand'
import Experties from '../../Components/Experties/Experties'
import { expertiesList } from '../../assets/assets'

const AboutUs = () => {
  return (
    <div>
        <AboutBanner/>
        <AboutDescription/>
        <AboutStand/>
        <Experties data={expertiesList}/>
    </div>
  )
}

export default AboutUs