import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Slides.css'

const Slides = ({ media }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable auto slide
        autoplaySpeed: 2000, // Auto slide interval in milliseconds
        arrows: true, 
      };
  return (
    <div>
        <Slider {...settings} >
            {media.map((item, index) => {
            if (item.type === 'image') {
                return (
                <div key={index}>
                    <img src={item.src} alt={`Slide ${index}`}/>
                </div>
                );
            } else if (item.type === 'video') {
                return (
                <div key={index}>
                    <video controls>
                    <source src={item.src} type="video/mp4/MOV" />
                    Your browser does not support the video tag.
                    </video>
                </div>
                );
            }
            return null;
            })}
        </Slider>
    </div>
  )
}

export default Slides