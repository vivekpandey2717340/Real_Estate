import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import './Tools.css'
const Tools = () => {
    const navigate = useNavigate();

    const handleNavigation = (category) => {
        navigate('/tools', { state: { category } });
        setMenu('tools');
    };
  return (
    <div>
        {/* <!-- Tools Part --> */}
        <section className="contact">
            <div className="contact_content">
                <h4>Is there any thing we can help you find in a property?</h4>
            </div>
            <div className="contact_btn">
                <a href="#">Contact Us</a>
            </div>
        </section>
        <section className="tools">
            <div className="container">
                <div className="title">
                        <h1>Our Tools</h1>
                </div>
                <div className="tools_grid">
                    <div className="tools_box"onClick={() => handleNavigation('Download')} >
                        <a >
                            <i className="fa-solid fa-file-contract"></i><br/>
                            <p>Downloads</p>
                        </a>
                    </div>
                    <div className="tools_box" onClick={() => handleNavigation('Currency Converter')}>
                        <a >
                            <i className="fa-solid fa-coins"></i><br/>
                            <p>Currency Conveter</p>
                        </a>
                    </div>
                    <div className="tools_box" onClick={() => handleNavigation('EMI')}>
                        <a >
                            <i className="fa-solid fa-calculator"></i><br/>
                            <p>Emi</p>
                        </a>
                    </div>
                    <div className="tools_box" onClick={() => handleNavigation('Unit Converter')}>
                        <a >
                            <i className="fa-solid fa-money-bill-transfer"></i><br/>
                            <p>Unit Conveter</p>
                        </a>
                    </div>
                    <div className="tools_box" onClick={() => handleNavigation('Home Loan')}>
                        <a >
                            <i className="fa-solid fa-house"></i><br/>
                            <p>Home Loan</p>
                        </a>
                    </div>

                </div>

            </div>
        </section>
        {/* <!-- End  of Tools Part --> */}
    </div>
  )
}

export default Tools