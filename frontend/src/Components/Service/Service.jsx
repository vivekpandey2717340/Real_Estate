import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import './Service.css'

const Service = () => {
    const navigate = useNavigate();

    const handleNavigation = (category) => {
        navigate('/tools', { state: { category } });
        setMenu('tools');
    };
  return (
    <div className='service_bg'>
        <section className="container">
            <div className="service">
                <div style={{display:'flex', alignItems:'center'}}>
                    <div className="service_photo">
                        <h1>Our <br/>Service</h1>
                        <p>List it on Real Estate and get genuine leads</p>
                    </div>
                </div>
                <div className="service_grid">
                    <Link to="/searchResult" className="service_box">
                        <h1>
                            Buy A Home
                        </h1>
                    </Link>
                    <div className="service_box" onClick={() => handleNavigation('Home Loan')}><h1>Home Loan</h1> </div>
                    <Link to="/searchResult" className="service_box">
                        
                            <h1>
                                Rent A Home
                            </h1>
                    </Link> 
                    <Link to="/searchResult" className="service_box"> 
                        <h1>
                            Find A Falt
                        </h1> 
                    </Link>                       
                </div>
            </div>
            
        </section>
    </div>
  )
}

export default Service