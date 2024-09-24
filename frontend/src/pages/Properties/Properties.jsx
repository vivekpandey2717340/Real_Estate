import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

import './Properties.css'
import AllProperties from '../../Components/AllProperties/AllProperties'
import PropertiesCategory from '../../Components/PropertiesCategory/PropertiesCategory'

const Properties = () => {
  const location = useLocation();
  const [propertiesCategory,setPropertiesCategory]= useState("")
  useEffect(()=>{
    if(location.state && location.state.proCategory){
      setPropertiesCategory(location.state.proCategory)
    }

  },[location.state])
  return (
    <div>
        <PropertiesCategory propertiesCategory={propertiesCategory} setPropertiesCategory={setPropertiesCategory}/>
        <AllProperties propertiesCategory={propertiesCategory}/>
    </div>
  )
}

export default Properties