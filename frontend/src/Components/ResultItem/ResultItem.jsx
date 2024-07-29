import React,{useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';

const ResultItem = ({id,name,price,location,content,area,mainImage,saleImage,furnishedStatus,Parking,builtYear}) => {
    // State to track if the item is in the wishlist or to compare
  
  const { addToCompareList, compareList } = useContext(StoreContext);

  // Check if the item is already in the compareList
  const isComparelist = compareList.some(item => item.id === id);

  const toggleComparelist = (e) => {
    e.preventDefault();
    const property = { id, name, price, location,  area, mainImage };
    addToCompareList(property);
  };


  const { addToWishlist, wishlist } = useContext(StoreContext);

  // Check if the item is already in the wishlist
  const isWishlistItem = wishlist.some(item => item.id === id);

  const toggleWishlist = (e) => {
    e.preventDefault();
    const property = { id, name, price, location, content, area, mainImage, saleImage };
    addToWishlist(property);
  };
    return (
    <div>
        
        <Link to={`/propertyDetails/${id}`}>
            <div >
                 
                {/* <!-- loop --> */}
                <div className="listing_box">          
                    <div className="listing_photo">
                        <div className="image" style={{borderRadius:'0'}}>
                            <img src={mainImage} alt=""style={{boxShadow:'none',borderRadius:'0'}}/>
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
                        <div className=''>
                            <h4 id="type">{name}</h4>
                            <h3 id="content" >{content}</h3>
                            <p id="location"><i className="fa-solid fa-location-dot"></i>{location}</p>
                            <p id="area"><i className="fa-solid fa-chart-area"></i><span>Area: </span>{area}</p>
                            <p id="area"><i class="fa-solid fa-square-parking"></i><span>Parking: </span>{Parking}</p>
                            {/* <p id="area"><i class="fa-solid fa-timeline"></i><span>Build Year: </span>{builtYear}</p> */}
                        </div>
                        <a>
                            <div className="details">                           
                                View Details                           
                            </div>
                        </a>  
                        
                        <div className="icon">
                            <ul>
                                <li id="compare" style={{ marginRight: '5px' }} className={isComparelist ? 'compare_active' : ''}>
                                    <a onClick={ toggleComparelist }><i className="fa-solid fa-code-compare"></i></a>
                                </li>
                                <li id="wishlist" className={isWishlistItem ? 'wish_active' : ''}>
                                    <a id="wish_btn" onClick={toggleWishlist}>
                                    <i className="fa-regular fa-heart"></i>
                                    </a>
                                </li>
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