import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import Slides from '../Slides/Slides';
import './ImageGallery.css';

const ImageGallery = ({ isSliderShow, setIsSliderShow }) => {
    const { id } = useParams(); // Get ID from URL params
    const { propertyList } = useContext(StoreContext); // Access property list from context
    const [property, setProperty] = useState(null); // State to hold property details
  
    useEffect(() => {
      // Fetch property details based on ID
      const foundProperty = propertyList.find(item => item._id === id);
      setProperty(foundProperty); // Set property state with fetched data
    }, [id, propertyList]); // Dependencies: ID (from URL), propertyList (context data)
  
    if (!property) return <div></div>; 
  
    // import image for all images and videos for slider
    const media = [
      { type: 'image', src: property.images },
      { type: 'image', src: property.image2 },
      { type: 'image', src: property.image3 },
      { type: 'image', src: property.image4 },
      { type: 'image', src: property.image5 },
      { type: 'image', src: property.image6 },
      { type: 'image', src: property.image7 },
      { type: 'video', src: property.video },
      { type: 'video', src: property.video2 }
    ].filter(item => item.src); // Filter out any items with empty src
  
    return (
    <div className={`gallery_box ${isSliderShow ? 'gallery_box_active' : ''}`}>
      <div className="overlay_gallery_div" onClick={() => setIsSliderShow(false)}></div>
      <div className='gallery_box_overlay'>
        <div className='gallery_slider'>
          <div className='gallery_slider_box'>
            <Slides media={media} />
            <div className='gallery_slider_crossbtn' onClick={() => setIsSliderShow(false)}>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default ImageGallery;
