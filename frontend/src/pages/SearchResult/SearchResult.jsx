import React,{useState} from 'react'
import Filter from '../../Components/Filter/Filter'
import Featured from '../../Components/Featured/Featured'

const SearchResult = () => {
  const [propertiesCategory,setPropertiesCategory]= useState("All")

  return (
    <div>
        <Filter/>
        <Featured propertiesCategory={propertiesCategory}/>
    </div>
  )
}

export default SearchResult