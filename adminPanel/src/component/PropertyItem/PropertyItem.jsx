import React, { useState } from 'react'
import './PropertyItem.css'
import { Link } from 'react-router-dom'


const PropertyItem = () => {
    const Property=[
       { id:"1",
        title:"House 1",
        price:"2300",
        address:"Lokanthali",
        image:"../src/assets/images/logo.png",
        category:"Hot Selling",
        status:"Sold",
        },
    ];
    const {propertyCategory} = useState('All')
  return (
    <div>
        <div className='blogs_list'>
            <div>
                <div className='back_link'>
                <h4> &gt;&gt; </h4> <Link to='/dashboard'><h4>Dashboard </h4></Link><h4>/</h4><h4> Property</h4>
                </div> 
                <hr style={{marginTop:'20px'}}/>
                <div className='Dashboard_title'>
                    <h1>Property List</h1>
                    <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                        <div className='catergory_box'>
                            <select name="category" id="category">
                                <option value="">Select Category</option>
                                <option value="Hot Selling">Hot Selling</option>
                                <option value="Featured">Featured</option>
                                <option value="New Properties">New Properties</option>
                                <option value="Premium Properties">Premium Properties</option>
                                <option value="All">All</option>
                            </select>

                        </div>
                        <div className='status_box'>
                            <select name="status" id="status">
                                <option value="">Select Status</option>
                                <option value="Sold">Sold</option>
                                <option value="Avialable">Avialable</option>
                                <option value="All">All</option>
                            </select>
                        </div>
                        <Link to="/addProperty">
                            <button>Add Property</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='blog_table'>
                <table border="2" >
                    <thead>
                    <th>S.N</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Address</th>
                    <th>Image</th>
                    <th>Category</th>
                    <th>Action</th>
                    </thead>
                    {/* fetch the data from here (Loop start) */}

                    <tbody>
                    {Property.map((Propertys,index) => (
                        <tr key={Propertys.id}>
                        <td className='table_sn'>{index +1}</td>
                        <td>{Propertys.title}</td>
                        <td>{Propertys.price}</td>
                        <td>{Propertys.address}</td>
                        <td className='table_img'><img src={Propertys.image} alt={Propertys.title} /></td>
                        <td className='table_title'>{Propertys.category}</td>
                        <td style={{textAlign:'center',width:'150px'}}>
                            <Link to="/editProperty" ><button className='edit_btn'>Edit</button></Link>
                            <button className='delete_btn'>Delete</button>
                            <button className='sold_btn'>Sold</button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                    {/* Loop end */}
                </table>
            </div> 
        </div>
    </div>
  )
}

export default PropertyItem