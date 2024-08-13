import React from 'react'
import './BlogsItem.css'
import { Link } from 'react-router-dom'

const BlogsItem = () => {
  const blogs = [
    {
      id: 1,
      image: "../src/assets/images/logo.png",
      title: "Satish",
      category:"News",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    // Add more blog entries here...
  ];

  // Function to truncate content to 50 words
  const truncateContent = (content, wordLimit) => {
    const words = content.split(' ');
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return content;
  };
  return (
    <div className='blogs_list'>
        <div>
            <div className='back_link'>
            <h4> &gt;&gt; </h4> <Link to='/dashboard'><h4>Dashboard </h4></Link><h4>/</h4><h4> Blogs</h4>
            </div> 
            <hr style={{marginTop:'20px'}}/>
            <div className='Dashboard_title'>
                <h1>Blogs List</h1>
                <Link to="/addblogs">
                    <button>Add Blogs</button>
                </Link>
            </div>
        </div>
        <div className='blog_table'>
            <table border="2" >
                <thead>
                  <th>S.N</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Content</th>
                </thead>
                {/* fetch the data from here (Loop start) */}

                <tbody>
                  {blogs.map((blog) => (
                    <tr key={blog.id}>
                      <td className='table_sn'>{blog.id}</td>
                      <td className='table_img'><img src={blog.image} alt={blog.title} /></td>
                      <td className='table_title'>{blog.title}</td>
                      <td className='table_category'>{blog.category}</td>
                      <td className='table_content'>{truncateContent(blog.content, 50)}</td>
                    </tr>
                  ))}
                </tbody>
                {/* Loop end */}
            </table>
        </div> 
    </div>
  )
}

export default BlogsItem