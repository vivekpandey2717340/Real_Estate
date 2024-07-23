import React,{useState} from 'react'
import BlogPost from '../../Components/BlogPost/BlogPost'

import './Blog.css'

const Blog = () => {
  const [propertiesCategory,setPropertiesCategory]= useState("All")
  return (
    <div>
        <BlogPost propertiesCategory={propertiesCategory}/>
    </div>
  )
}

export default Blog