import React from 'react'
import {Link} from 'react-router-dom'

import './Profile.css'

const Profile = () => {
  return (
    <div className='container'>
        <div className="profile">
            <div className="profile_grid">
                <div className="profile_content">
                    <div className='my_profile'>
                        <div>
                            <h1 style={{float:'left'}}>My Profile</h1>
                            <Link to="/wishlist">
                                <h2 style={{float:'right', color:'var(--b)'}}>My Wishlist <img src="../src/assets/image/wishlist.png" alt="" /></h2>
                            </Link>
                        </div>
                        <div style={{clear:'both'}}>
                        <p>Name</p>
                        <span>Satish</span><br />
                        <hr />
                        <p>Email</p>
                        <span>Satish@gmail.com</span><br />
                        <hr />
                        <p>Number</p>
                        <span>9809673319</span><br />
                        <hr />
                        <p>Location</p>
                        <span>Bhaktpur</span><br />
                        <hr />
                        <p>DOB</p>
                        <span>Bhaktpur</span><br />
                        <hr />
                        <Link to="">
                            <button>Update Profile</button>
                        </Link>
                        <Link to="" className='logout'>
                            <button>Log Out</button>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="profile_photo">
                    <div className='profile_photo_cont'>
                        <div className='profile_image'>
                            <img src="../src/assets/image/satish.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Profile