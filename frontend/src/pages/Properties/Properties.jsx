import React, { useState } from 'react'
import './Properties.css'
import AllProperties from '../../Components/AllProperties/AllProperties'
import PropertiesCategory from '../../Components/PropertiesCategory/PropertiesCategory'

const Properties = () => {
  const [propertiesCategory,setPropertiesCategory]= useState("All")
  return (
    <div>
        <PropertiesCategory propertiesCategory={propertiesCategory} setPropertiesCategory={setPropertiesCategory}/>
        <AllProperties propertiesCategory={propertiesCategory}/>
    </div>
  )
}

export default Properties