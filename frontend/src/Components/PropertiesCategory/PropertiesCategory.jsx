import React, {useState} from 'react'
import './PropertiesCategory.css'

const PropertiesCategory = ({propertiesCategory,setPropertiesCategory}) => {

    
    const all ="All"
    const featured = "Featured"
    const NewProperties= "New Properties"
    const PremiumProperties= "Premium Properties"
    const HotSelling="Hot Selling";

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
              <div onClick={()=>setPropertiesCategory(prev=>prev===featured?"All":featured)}  className={`${propertiesCategory === featured ? "active" : ""} all_category_box center_box`}>
                <p>
                  {featured}
                </p>
              </div>
              <div onClick={()=>setPropertiesCategory(prev=>prev===NewProperties?"All":NewProperties)}  className={`${propertiesCategory === NewProperties ? "active" : ""} all_category_box center_box`}>
                <p>
                  {NewProperties}
                </p>
              </div>
              <div onClick={()=>setPropertiesCategory(prev=>prev===PremiumProperties?"All":PremiumProperties)}  className={`${propertiesCategory === PremiumProperties ? "active" : ""} all_category_box center_box`}>
                <p>
                  {PremiumProperties}
                </p>
              </div>
              <div onClick={()=>setPropertiesCategory(prev=>prev===HotSelling?"All":HotSelling)}  className={`${propertiesCategory === HotSelling ? "active" : ""} all_category_box right`}>
                <p>
                  {HotSelling}
                </p>
              </div>
            </div>
        </section>
         {/* <!--End category Menu --> */}
    </div>
  )
}

export default PropertiesCategory