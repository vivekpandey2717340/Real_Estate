import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddPropertyItem.css';
import mammoth from 'mammoth';

const AddPropertyItem = () => {
  const [listItems, setListItems] = useState('');
  const [listArray, setListArray] = useState([]);

  // Handle input change and update the list items
  const handleListChange = (event) => {
    setListItems(event.target.value);
  };

  const handleAddItems = () => {
    const itemsArray = listItems.split('\n').filter(item => item.trim() !== '');
    setListArray(itemsArray);
  };

  const displalyPropertyAddedMessage = (e) => {
    e.preventDefault();
    console.log('Property Added:', { description, listItems });
  };
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
                <label htmlFor="title">Title</label><span>*</span><br />
                <input type="text" name='title' placeholder='Enter Title' required/><br />              
                <label htmlFor="sellingType">Selling Type</label><span>*</span><br />
                <select name="sellingType" id="sellingType" required>
                  <option value="">Select Selling Type</option>
                  <option value="Sale">Sale</option>
                  <option value="Rent">Rent</option>
                </select>  <br /> 
                <label htmlFor="propertyStatus">Property Status</label><span>*</span><br />
                <select name="propertyStatus" id="propertyStatus"  required>
                  <option value="">Select Property Status</option>
                  <option value="UnFurnnished">UnFurnnished</option>
                  <option value="Semi-Furnished">Semi-Furnished</option>
                  <option value="Furnished">Furnished</option>
                </select>  <br /> 
                <label htmlFor="builtYear">Built Year</label><br />
                <input type="number" name='builtYear' placeholder='In AD' /><br /> 
                <label htmlFor="balcony">Balcony</label><br />
                <input type="number" name='balcony' placeholder='No. of balcony' /><br /> 
                <label htmlFor="area">Area</label><br />
                <input type="number" name='area' placeholder='In sq.ft' /><br /> 
                <label htmlFor="floor">Floor</label><br />
                <input type="number" name='floor' placeholder='No. of floor/ available floor' /><br /> 
                <label htmlFor="totalFloor">Total Floor</label><br />
                <input type="number" name='totalFloor' placeholder='No. of floor available in house' /><br /> 
                <label htmlFor="roadAccess">Road Access</label><br />
                <input type="number" name='roadAccess' placeholder='In feet' /><br /> 
                <label htmlFor="direction">Direction</label><br />
                <input type="text" name='direction' placeholder='Set the direction of property' /><br /> 
                
              </div>
              <div>
                <label htmlFor="content">Content</label><span>*</span><br />
                <input type="text" name='content' placeholder='Enter Content' required/><br />
                <label htmlFor="propertyType">Property Type</label><span>*</span><br />
                <select name="propertyType" id="propertyType" required>
                  <option value="">Select Property Type</option>
                  <option value="Home">Home</option>
                  <option value="Flat">Flat</option>
                  <option value="Apartment">Apartment</option>
                </select><br />
                <label htmlFor="category">Category</label><span>*</span><br />
                <select name="category" id="category" required>
                  <option value="">Select category</option>
                  <option value="Hot Selling">Hot Selling</option>
                  <option value="New Properties">New Properties</option>
                  <option value="Featured">Featured</option>
                  <option value="Premium Properties">Premium Properties</option>
                </select><br />
                <label htmlFor="price">Price</label><span>*</span><br />
                <input type="number" name='price' placeholder='Enter price' required/><br />
                <label htmlFor="bathroom">Bathroom</label><br />
                <input type="number" name='bathroom' placeholder='Enter no. of bathroom' /><br />
                <label htmlFor="kitchen">Kitchen</label><br />
                <input type="number" name='kitchen' placeholder='Enter no. of kitchen room' /><br />
                <label htmlFor="hall">Hall</label><br />
                <input type="number" name='hall' placeholder='Enter no. of hall' /><br />
                <label htmlFor="bhk">BHK</label><br />
                <input type="number" name='bhk' placeholder='No. of room, hall & Kitchen' /><br />
                <label htmlFor="bedroom">Bedroom</label><br />
                <input type="number" name='bedroom' placeholder='No. of bedroom' /><br />
                <label htmlFor="Parking">Parking</label><br />
                <input type="text" name='Parking' placeholder='eg. 2 Bike & 1 Car' /><br />
              </div>
            </div>
            <h4>Location</h4>
            <div className='details_grid'>
              <div>
                <label htmlFor="state">State</label><span>*</span><br />
                <input type="text" name='state' placeholder='Enter State' required/><br />
                <label htmlFor="address">Address</label><span>*</span><br />
                <input type="text" name='address' placeholder='Enter full address' required/><br />
              </div>
              <div>
                <label htmlFor="city">City</label><span>*</span><br />
                <input type="text" name='city' placeholder='Enter City ' required/><br />
              </div> 
            </div>
            <h4>Description</h4>
            <div className='description'>
              <p>Please enter the each data into a new line and complete one data in one line</p>
              {/* Text area for user to enter the list items */}
              <textarea
                placeholder="Enter items, each on a new line"
                value={listItems}
                name='description'
                onChange={handleListChange}
                // rows="10"
                // cols="50"
              ></textarea><br />
              {/* <button type="button" onClick={handleAddItems}>Add to List</button> */}
              <ul>
                {listArray.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <h4>Images</h4>
            <div className='details_grid'>
              <div>
                <label htmlFor="images">Select Image</label><br />
                <input type="file" name='images'  required /><br />
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