// BlogDetails.jsx
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './BlogDetails.css';

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const { blogList } = useContext(StoreContext); // Access blog list from context

  const blog = blogList.find(blog => blog._id === id);

  if (!blog) return <div></div>;

  return (
    <div className="container">
        <div className='blog_details_title'>
            <h4>{blog.title}</h4>
            <div className='blog_details_grid'>
                <div className="blog_details_img">
                    <img src={blog.image} alt={blog.name} />
                </div>
                <div className="blog_details_content">
                    <p>{blog.content}</p>
                    <div className="blog_details_time">
                        <p>{blog.time}</p>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default BlogDetails;
