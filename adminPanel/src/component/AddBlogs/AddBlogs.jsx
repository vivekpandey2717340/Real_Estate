import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './AddBlogs.css'
import {Link} from 'react-router-dom'


const AddBlogs = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const displayMessageofBlogs=(event)=>{
        event.preventDefault(); // Prevent the default form submission behavior
        setMessage('Blogs added successfully!');
        
        
    }
  return ( 
    <div className='banner_box' >
        <div className='back_link'>
            <h4> &gt;&gt; </h4> <Link to='/dashboard'><h4>Dashboard </h4></Link><h4>/</h4><Link to='/blogs'><h4> Blogs</h4></Link><h4>/</h4><h4>Add Blogs</h4>
            
        </div> 
        <hr/>
        <div className='Dashboard_title'>
            <h1>Add Blogs</h1>
        </div>
        <div className='banner_form'>
            <form action="" method='post' onSubmit={displayMessageofBlogs}>
                <label htmlFor="image"> Select Image</label><br />
                <input type="file"  name='image' required/><br />
                <label htmlFor="title">Title</label><br />
                <input type="text" name='title'  /><br />
                <label htmlFor="category">Category</label> <br />
                <select name="category" id="category" required>
                    <option value="">Select Category</option>
                    <option value="News">News</option>
                    <option value="Property">Property</option>
                    <option value="LifeStyle">LifeStyle</option>
                    <option value="Finance">Finance</option>
                </select>
                <br />
                <label htmlFor="conent">Content</label> <br />
                <textarea name="content" id="content" rows="7" required></textarea><br />
                <div style={{display:'flex', justifyContent:'center'}}>
                    <input type="submit" value='Add Blogs' name='addBlogs'/>
                </div>
            </form>
            {message && <p className="success-message">{message}</p>}
        </div>       
    </div>
  )
}

export default AddBlogs