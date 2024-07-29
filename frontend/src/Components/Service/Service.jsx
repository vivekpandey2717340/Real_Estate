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
    <div>
        {/* <!-- Our Service --> */}
        <section className="container">
            <div className="service">
                <div style={{display:'flex', alignItems:'center'}}>
                    <div className="service_photo">
                        <h1>Our <br/>Service</h1>
                        <p>List it on Real Estate and get genuine leads</p>
                    </div>
                </div>
                <div className="service_grid">
                    <div className="service_box" >
                        <h1>
                            <Link to="/searchResult">
                                <a>Buy A Home</a>
                            </Link>
                        </h1>
                    </div>
                    <div className="service_box" onClick={() => handleNavigation('Home Loan')}><h1><a >Home Loan</a></h1> </div>
                    <div className="service_box"><h1>
                        <Link to="/searchResult">
                            <a>Rent A Home</a>
                        </Link></h1>
                    </div>                       
                    <div className="service_box"><h1>
                        <Link to="/searchResult">
                            <a>Rent A Home</a>
                        </Link></h1>
                    </div>                       
                </div>
            </div>
            
        </section>
        {/* <!--End Our Service --> */}
    </div>
  )
}

export default Service