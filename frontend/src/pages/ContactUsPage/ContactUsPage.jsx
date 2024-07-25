import React from 'react'
import { Link } from 'react-router-dom'
import './ContactUsPage.css'
import ContactUs from '../../Components/ContactUs/ContactUs'

const ContactUsPage = () => {
  return (
    <div>
        <section>
            <div id="login_show">
            <div className="login_box">
                <div className="login_image">
                <img src="../src/assets/image/footer.png" alt="" />
                </div>
                <div className="login-body_1  contact_width" style={{paddingTop:'50px'}} >
                    <ContactUs/>
                    <div className="cross_btn">
                        <Link to="/">
                            <i className="fa-solid fa-circle-xmark"></i>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default ContactUsPage