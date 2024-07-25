import React from 'react'
import { Link } from 'react-router-dom'

const ResultItem = ({id,name,price,location,content,area,mainImage,saleImage,furnishedStatus,Parking,builtYear}) => {
  return (
    <div>
        
        <Link to={`/propertyDetails/${id}`}>
            <div >
                 
                {/* <!-- loop --> */}
                <div className="listing_box">          
                    <div className="listing_photo">
                        <div className="image">
                            <img src={mainImage} alt=""style={{boxShadow:'none'}}/>
                            <div className="sale_img">
                                <img src={saleImage} alt=""/>
                            </div>
                            <div className="price">
                                <div className="price_grid"style={{float:'right'}}>
                                    <h4 id="price">{price}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="listing_content"> 
                        <h4 id="type">{name}</h4>
                        <h3 id="content">{content}</h3>
                        <p id="location"><i className="fa-solid fa-location-dot"></i>{location}</p>
                        <p id="area"><i className="fa-solid fa-chart-area"></i><span>Area: </span>{area}</p>
                        <p id="area"><i className="fa-solid fa-chart-area"></i><span>Furnished Status: </span>{furnishedStatus}</p>
                        <p id="area"><i className="fa-solid fa-chart-area"></i><span>Parking: </span>{Parking}</p>
                        <p id="area"><i className="fa-solid fa-chart-area"></i><span>Build Year: </span>{builtYear}</p>
                        
                            <a>
                                <div className="details">                           
                                    View Details                           
                                </div>
                            </a>  
                        
                        <div className="icon">
                            <ul>
                                <li id="compare"><a href=""><i className="fa-solid fa-code-compare"></i></a></li>
                                <li id="wishlist"><a id="wish_btn" ><i className="fa-regular fa-heart "></i></a></li>
                            </ul>
                        </div>                
                    </div>                
                </div>              
                {/* <!-- end loop --> */}
            </div>
        </Link>
    </div>
  )
}

export default ResultItem