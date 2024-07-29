import React, { useContext } from 'react'
import './AllProperties.css'
import { StoreContext } from '../../context/StoreContext'
import PropertyItem from '../PropertyItem/PropertyItem'


const AllProperties = ({propertiesCategory}) => {
  const {propertyList} = useContext(StoreContext)
  return (
    <div className='container'>
      <div className="all_properties" id="all_properties">
        {propertyList.map((item,index)=>{
          if(propertiesCategory==="All" || propertiesCategory===item.category)
            return <PropertyItem key={index} id={item._id} name={item.name} price={item.price} location={item.location} content={item.content} area={item.area} mainImage={item.mainImage} saleImage={item.saleImage} roadAccess={item.roadAccess} />
          })}
      </div>
    </div>   
  )
}

export default AllProperties