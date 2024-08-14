import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EditExpertItem = () => {
    const navigate = useNavigate();
    const displayMessageofEditExperts=(e)=>{
        e.preventDefault();
        navigate("/expertList")

    }
  return (
    <div className='banner_box'>
    <div className='back_link'>
        <h4> &gt;&gt; </h4>
        <Link to='/dashboard'><h4>Dashboard </h4></Link>
        <h4>/</h4>
        <Link to='/expertList'><h4> Experts</h4></Link>
        <h4>/</h4>
        <h4>Edit Experts</h4>
    </div> 
    <hr />
    <div className='Dashboard_title'>
        <h1>Edit Experts</h1>
    </div>
    <div className='banner_form'>
        <form onSubmit={displayMessageofEditExperts}>
            <label htmlFor="image">Select Image</label><br />
            <input type="file" name='image' value=""  /><br />
            <label htmlFor="name" >Name</label><br />
            <input type="text" name='name' value=""   /><br />
            
            <label htmlFor="content">Content</label><br />
            <textarea name="content" id="content" value=""  ></textarea><br />
            <div style={{display:'flex', justifyContent:'center'}}>
                <input type="submit" value='Update Experts' name='updtateExperts' />
            </div>
        </form>
        {/* {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>} */}
    </div>       
</div>
  )
}

export default EditExpertItem