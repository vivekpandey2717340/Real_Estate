import React from 'react'
import { Link } from 'react-router-dom'
import './Category.css'

const Category = () => {
  return (
    <div>
       
        {/* <!--Home Category Section --> */}
        <section className="container ">
            <div className="category">
                <div className="title">
                    <h1>Popular Categories</h1>
                </div>
                <div className="category_grid">
                    <div className='category_box'>
                        <img src="../src/assets/image/home.png" alt="" />
                        <h4>Where Dreams Come True!</h4>
                        <p>"Modern flats with comfort and convenience. Find your perfect flat today!"</p>
                    </div>
                    <div className='category_box'>
                        <img src="../src/assets/image/blueprint.png" alt="" />
                        <h4> Buy Your Perfect Flat Today!</h4>
                        <p>"Modern flats with comfort and convenience. Find your perfect flat today!"</p>
                    </div>
                    <div className='category_box'>
                        <img src="../src/assets/image/apartment.png" alt="" />
                        <h4>Find Your Dream Apartment!</h4>
                        <p>"Luxurious apartments in prime locations. Discover your dream apartment now!"</p>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--End Category Section --> */}
    </div>
  )
}

export default Category