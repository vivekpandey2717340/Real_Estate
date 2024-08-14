import React from 'react'
import { Link } from 'react-router-dom'
import './AddPropertyItem.css'

const AddPropertyItem = () => {
  const displalyPropertyAddedMessage=()=>{

  }
  return (
      <div className='banner_box'>
        <div className='back_link'>
            <h4> &gt;&gt; </h4>
            <Link to='/dashboard'><h4>Dashboard </h4></Link>
            <h4>/</h4>
            <Link to='/property'><h4> Property</h4></Link>
            <h4>/</h4>
            <h4>Add Property</h4>
        </div> 
        <hr />
        <div className='Dashboard_title'>
            <h1>Add Property</h1>
        </div>
        <div className='property_form'>
          <form action="" method="post" onSubmit={displalyPropertyAddedMessage}>
            <h4>Details</h4>
            <div className='details_grid'>
              <div>
                
              </div>
              <div>

              </div>
            </div>
          </form>
        </div>
      </div>
    
  )
}

export default AddPropertyItem