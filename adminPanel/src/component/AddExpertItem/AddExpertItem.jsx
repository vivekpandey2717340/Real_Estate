import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const AddExpertItem = () => {
  const displayMessageofExperts=()=>{

  }
  return (
    <div className='banner_box'>
            <div className='back_link'>
                <h4> &gt;&gt; </h4>
                <Link to='/dashboard'><h4>Dashboard </h4></Link>
                <h4>/</h4>
                <Link to='/expertList'><h4> Experts</h4></Link>
                <h4>/</h4>
                <h4>Add Experts</h4>
            </div> 
            <hr />
            <div className='Dashboard_title'>
                <h1>Add Experts</h1>
            </div>
            <div className='banner_form'>
                <form onSubmit={displayMessageofExperts} method='post'>
                    <label htmlFor="image">Select Image</label><br />
                    <input type="file" name='image' value="" required /><br />
                    <label htmlFor="name">Name</label><br />
                    <input type="text" name='name' value=""  required /><br />
                    
                    <label htmlFor="content">Content</label><br />
                    <textarea name="content" id="content" value=""  required></textarea><br />
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <input type="submit" value='Add Experts' name='addExperts' />
                    </div>
                </form>
                {/* {message && <p className="success-message">{message}</p>}
                {error && <p className="error-message">{error}</p>} */}
            </div>       
        </div>
  )
}

export default AddExpertItem