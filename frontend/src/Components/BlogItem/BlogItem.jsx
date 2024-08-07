import React from 'react'
import {Link} from 'react-router-dom'
import './BlogItem.css'

const BlogItem = ({id,image,title,time}) => {
  return (

    <div>
        <a href={`/blogDetails/${id}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <div className="blogs_box">
            <div className="blogs_img">
                <img src={image} alt="blogImage"/>
                <div className='blogs_after'>
                  <span>Read More</span>
                </div>
            </div>
            <div className="blogs_content">
                <h4>{title}</h4>
                <h5>{time}</h5>
            </div>
          </div>
        </a>
        
    </div>
  )
}

export default BlogItem