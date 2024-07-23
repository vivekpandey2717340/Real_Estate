import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
            {/* <!-- Footer Part --> */}
            <footer style={{marginTop:'50px 0'}}>
            <div className="container">
                <div className="footer_img">
                    <img src="../src/assets/image/footer.png" alt=""/>
                </div>
            </div>
            <div className="footer">
                <div className="container">
                    <div className="logo_footer">
                        <img src="../src/assets/image/logo.png" alt=""/>
                    </div> 
                    <div className="footer_grid">
                        <div className="footer_box">
                            <h3>Our Office</h3>
                            <p>Address:Near Suncity,Kathmandu, Pepsicola</p>
                            <h4>Contact No.:+977-9809673319</h4>
                        </div>
                        <div className="footer_box_1">
                            <ul><h3>Category</h3>
                                <li><a href="#">Falt</a></li>
                                <li><a href="#">House</a></li>
                                <li><a href="#">Appartment</a></li>
                            </ul>
                        </div>
                        <div className="footer_box_1">
                            <ul><h3>Tools</h3>
                                <li><a href="#">Home Loan</a></li>
                                <li><a href="#">Unit Converter</a></li>
                                <li><a href="#">EMI</a></li>
                                <li><a href="#">Currency Converter</a></li>
                                <li><a href="#">Download Agreement</a></li>
                            </ul>
                        </div>
                        <div className="footer_box_2">
                            <div>
                                <ul><h3>Contact Us</h3>
                                    <li><a href="#"><i className="fa-solid fa-envelope"></i>info@twbcreates.com</a></li>
                                    <li><a href="#"><i className="fa-solid fa-phone"></i>+977-9809673319</a></li>
                                </ul >
                                <ul className="media"><h3  style={{paddingBottom:'10px'}}>Follow Us On</h3>
                                    <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-square-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-square-whatsapp"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>  
                    <div className="terms"><a href="#">Privacy Policy</a> | <a href="#">Terms & Condition</a></div>                   
                </div> 
                <hr/>
                <div className="container">
                    <div className="desclaimar">
                        <strong>Desclaimar :</strong>
                    </div>

                </div> 
                <hr/>  
                <div className="container">
                    <div className="copy">
                        <p>&#169; Copyright 2024 Real Estate <span>|</span> Developed By TWB Creates Team</p>
                    </div>

                </div>    
            </div>
        </footer>
        {/* <!-- End of Footer Part --> */}
    </div>
  )
}

export default Footer