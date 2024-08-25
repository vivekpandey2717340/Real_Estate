import React from 'react'
import './ContactUs.css'
const ContactUs = () => {
  return (
    <div>
        <div className='contact_grid'>
            <div className='contact_form'>
                <form action="" method='post' >
                    <h1>Get In Touch </h1>
                    <input type="text" placeholder='Name' name='name' required /><br />
                    <input type="email" placeholder='Email' name='email'  /><br />
                    <input type="" placeholder='number' name='number' required /><br />
                    <select name="inqueryFor" id="">
                        <option value="">Select Inquery</option>
                        <option value="Sell">Sell</option>
                        <option value="Rent">Rent</option>
                    </select><br />
                    <textarea name="message" id="" placeholder='Message'></textarea>
                    <input type="submit" name='conatctSubmit' value="Submit" />
                </form>
                <div className='contact_info'>
                    <div className='contact_info_cont'>
                        <div>
                            <h2><i className="fa-solid fa-phone"></i></h2>
                        </div>
                        <div>
                            <h3>PHONE</h3>
                            <p>9851163192</p>
                        </div>

                    </div>
                    <div className='contact_info_cont'>
                        <div>
                            <h2><i className="fa-solid fa-envelope"></i></h2>
                        </div>
                        <div>
                            <h3>EMAIL</h3>
                            <p>9851163192</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='contact_map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.768463890978!2d85.36785587417401!3d27.693550176190517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1ba69d44bf7d%3A0xd77b3a1b6ffe33be!2sTWB%20Creatives!5e0!3m2!1sen!2snp!4v1721727159218!5m2!1sen!2snp"  style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
  )
}

export default ContactUs