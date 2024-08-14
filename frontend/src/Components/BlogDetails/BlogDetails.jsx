// BlogDetails.jsx
import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BlogDetails.css';

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blogList, setBlogList] = useState([]);  

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/blogs/list');
        if (response.data.success) {
          setBlogList(response.data.blogs);
        }
      } catch (error) {
        
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);// Access blog list from context

  const blog = blogList.find(blog => blog._id === id);

  if (!blog) return <div></div>;

  return (
    <div className="container">
        <div className='blog_details_title'>
            <h4>{blog.title}</h4>
            <div className='blog_details_grid'>
                <div className="blog_details_img">
                    <img src={`http://localhost:4000/images/${blog.image}`} alt={blog.name} />
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
