import React from 'react'
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
            
                    <div className="category_box">
                        <a href="">
                            <img src="../src/assets/image/house.png" alt=""/>
                        </a>
                    </div>
                
                <div className="category_box">
                    <a href="">
                        <img src="../src/assets/image/flat.png" alt=""/>
                    </a> 
                </div>
                <div className="category_box">
                    <a href="">
                        <img src="../src/assets/image/appartment.png" alt=""/>
                    </a>
                </div>
            </div>
        </div>
        </section>
        {/* <!--End Category Section --> */}
    </div>
  )
}

export default Category