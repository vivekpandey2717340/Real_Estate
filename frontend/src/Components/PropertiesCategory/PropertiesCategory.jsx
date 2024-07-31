import React, {useState} from 'react'
import './PropertiesCategory.css'

const PropertiesCategory = ({propertiesCategory,setPropertiesCategory}) => {

    
    const all ="All"
    const isFeatured = "Featured"
    const isNew= "New Properties"
    const isPremium= "Premium Properties"
    const isHotSelling="Hot Selling";

  return (
    <div>
        {/* <!-- category Menu --> */}
        <section className="container">
            <div className="all_category">
              
              <div onClick={()=>setPropertiesCategory(prev=>prev===all?"All":all)}  className={`${propertiesCategory === all ? "active" : ""} all_category_box left`}>
                <p>
                  {all}
                </p>
              </div>
              <div onClick={()=>setPropertiesCategory(prev=>prev===isFeatured?"All":isFeatured)}  className={`${propertiesCategory === isFeatured ? "active" : ""} all_category_box center_box`}>
                <p>
                  {isFeatured}
                </p>
              </div>
              <div onClick={()=>setPropertiesCategory(prev=>prev===isNew?"All":isNew)}  className={`${propertiesCategory === isNew ? "active" : ""} all_category_box center_box`}>
                <p>
                  {isNew}
                </p>
              </div>
              <div onClick={()=>setPropertiesCategory(prev=>prev===isPremium?"All":isPremium)}  className={`${propertiesCategory === isPremium ? "active" : ""} all_category_box center_box`}>
                <p>
                  {isPremium}
                </p>
              </div>
              <div onClick={()=>setPropertiesCategory(prev=>prev===isHotSelling?"All":isHotSelling)}  className={`${propertiesCategory === isHotSelling ? "active" : ""} all_category_box right`}>
                <p>
                  {isHotSelling}
                </p>
              </div>
            </div>
        </section>
         {/* <!--End category Menu --> */}
    </div>
  )
}

export default PropertiesCategory