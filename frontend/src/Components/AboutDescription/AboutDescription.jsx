import React from 'react'
import './AboutDescription.css'

const AboutDescription = () => {
  return (
    <div className='aboutDescription'>
        <div className="container">
            <div className="aboutDescription_grid">
                <div className="messages">
                    <div className="about_title">
                        <h1>Welcome To Real Estate</h1>
                        <p>
                        Real Estate.com is your go-to online marketplace for buying and renting
                        properties in Nepal. We provide a seamless platform where buyers can directly
                        connect with property agents, making the property dealing process more
                        transparent and efficient. Our mission is to bridge the gap between buyers
                        and sellers, offering a reliable and user-friendly space for all your real 
                        estate needs.
                        </p>
                        <h1>Who We Are</h1>
                        <p>
                        At Real Estate.com, we understand the intricacies of the real estate market 
                        in Nepal. Our team is dedicated to simplifying the property search process, 
                        providing you with the tools and resources to find your perfect home or 
                        investment opportunity. Whether you're looking to buy, rent, or explore 
                        property listings, we are here to support you every step of the way.
                        </p>
                        <h1>Our Commitment</h1>
                        <p>
                        We are committed to providing a trustworthy and efficient marketplace 
                        for property dealings. At Real Estate.com, we believe in creating a 
                        transparent environment where buyers and sellers can interact confidently. 
                        Our goal is to make your property journey as simple and successful as possible.
                        </p>
                    </div>
                </div>
                <div className='inqueryForm'>
                    <div className='form'>
                        <form action="" method='post'>
                            <h1>Send Us A Message</h1>
                            <label htmlFor="name">Full Name</label><br />
                            <input type="text" name='name' required /><br />
                            <label htmlFor="number">Phone Number</label><br />
                            <input type="number" name='number' required /><br />
                            <label htmlFor="email">Email</label> <br />
                            <input type="email" name='email' required /><br />
                            <label htmlFor="Inqueryfor">Inquery For</label><br />
                            <select name="inqueryFor" id="inqueryFor">
                                <option value="">Select</option>
                                <option value="Sale">Sale Properties</option>
                                <option value="Rent">Rent Properties</option>
                                <option value="Buy">Buy Properties</option>
                            </select><br />
                            <label htmlFor="mssage">Message</label><br />
                            <textarea name="messaage" id="message" cols={50} rows={5}></textarea><br />
                            <input type="submit"  value="Submit" className='submit_btn' name='inquery_message'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutDescription