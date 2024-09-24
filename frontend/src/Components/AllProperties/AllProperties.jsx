import React, { useContext } from 'react'
import './AllProperties.css'
import { StoreContext } from '../../context/StoreContext'
import PropertyItem from '../PropertyItem/PropertyItem'

const AllProperties = ({propertiesCategory}) => {
  const {propertyList} = useContext(StoreContext)

  let content;

  if (propertiesCategory === "All" || (propertiesCategory === "Featured")) {
    content = <p>{propertiesCategory} Properties</p>;
  }  
  else {
    content = <p>{propertiesCategory}</p>;
  }
  return (
    <div className='container'>
      <div className='category_content'>
         <h3>{content}</h3>
      </div>      
      <div className="all_properties" id="all_properties">        
        {propertyList.map((item,index)=>{
          if(propertiesCategory==="All" || propertiesCategory===item.category)
            return <PropertyItem key={index} id={item._id} title={item.title} price={item.price} address={item.address} content={item.content} area={item.area} images={item.images} sellingType={item.sellingType} roadAccess={item.roadAccess} />
          })}
      </div>
    </div>   
  )
}

export default AllProperties