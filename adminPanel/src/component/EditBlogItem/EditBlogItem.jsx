import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const EditBlogItem = () => {
    const navigate = useNavigate();
    const displayMessageofEditBlogs=(e)=>{
        e.preventDefault();
        navigate("/blogs")
    }
  return (
    <div className='banner_box'>
        <div className='back_link'>
            <h4> &gt;&gt; </h4>
            <Link to='/dashboard'><h4>Dashboard </h4></Link>
            <h4>/</h4>
            <Link to='/blogs'><h4> Blogs</h4></Link>
            <h4>/</h4>
            <h4>Edit Blogs</h4>
        </div> 
        <hr />
        <div className='Dashboard_title'>
            <h1>Edit Blogs</h1>
        </div>
        <div className='banner_form'>
            <form onSubmit={displayMessageofEditBlogs}>
            <label htmlFor="image">Select Image</label><br />
                    <input type="file" name='image' /><br />
                    <label htmlFor="title">Title</label><br />
                    <input type="text" name='title'  /><br />
                    <label htmlFor="category">Category</label> <br />
                    <select name="category" id="category"  >
                        <option value="">Select Category</option>
                        <option value="News">News</option>
                        <option value="Property">Property</option>
                        <option value="LifeStyle">LifeStyle</option>
                        <option value="Finance">Finance</option>
                    </select><br />
                    <label htmlFor="content">Content</label><br />
                    <textarea name="content" id="content" rows="7" ></textarea><br />
                    <div style={{display:'flex', justifyContent:'center'}}>
                    <input type="submit" value='Update Blogs' name='updtateBlogs' />
                </div>
            </form>
            {/* {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>} */}
        </div>       
    </div>
  )
}

export default EditBlogItem