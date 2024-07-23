import React from 'react'
import {Link} from 'react-router-dom'
import './BlogItem.css'

const BlogItem = ({id,image,shotContent,time}) => {
  return (

    <div>
        
        <a href={`/blogDetails/${id}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <div className="blogs_box">
            <div className="blogs_img">
                <img src={image} alt="blogImage"/>
            </div>
            <div className="blogs_content">
                <h4>{shotContent}</h4>
                <h4>{time}</h4>
            </div>
          </div>
        </a>
        
    </div>
  )
}

export default BlogItem