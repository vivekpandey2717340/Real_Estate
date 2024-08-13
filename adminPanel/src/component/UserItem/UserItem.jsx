import React from 'react'
import { Link } from 'react-router-dom'
import './UserItem.css'

const UserItem = () => {
    // static data remove whenadded from backend
    const users = [
        {
            id:"1",
            name:"Satish",
            number:"9809673319",
            email:"satis@gmail.com",
            dob:"2058/02/07",
            address:"Lokanthali",
         },
         
       
      ];
  return (
    <div className='blogs_list'>
        <div>
            <div className='back_link'>
            <h4> &gt;&gt; </h4> <Link to='/dashboard'><h4>Dashboard </h4></Link><h4>/</h4><h4> User</h4>
            </div> 
            <hr style={{marginTop:'20px'}}/>
            <div className='Dashboard_title'>
                <h1>Users List</h1>
                
            </div>
        </div>
        <div className='user_table'>
            <table border="2" >
                <thead>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>DOB</th>
                </thead>
                {/* fetch the data from here (Loop start) */}

                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                       <td>{user.name || N/A}</td>
                       <td>{user.number || N/A}</td>
                       <td>{user.email || N/A}</td>
                       <td>{user.address || N/A}</td>
                       <td>{user.dob || N/A}</td>
                    </tr>
                  ))}
                </tbody>
                {/* Loop end */}
            </table>
        </div> 
    </div>
  )
}

export default UserItem