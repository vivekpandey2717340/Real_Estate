import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UserItem.css';

const UserItem = () => {
<<<<<<< HEAD
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/User/list');
                if (response.data.success) {
                    setUsers(response.data.users);
                } else {
                    setError('Failed to fetch users');
                }
            } catch (err) {
                console.error("Error fetching users:", err);
                setError('An error occurred while fetching users.');
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className='blogs_list'>
            <div>
                <div className='back_link'>
                    <h4> &gt;&gt; </h4> 
                    <Link to='/dashboard'><h4>Dashboard </h4></Link>
                    <h4>/</h4><h4> User</h4>
                </div> 
                <hr style={{marginTop:'20px'}}/>
                <div className='Dashboard_title'>
                    <h1>Users List</h1>
                </div>
            </div>
            <div className='user_table'>
                <table border="2">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.name || 'N/A'}</td>
                                    <td>{user.number || 'N/A'}</td>
                                    <td>{user.email || 'N/A'}</td>
                                    <td>{user.address || 'N/A'}</td>
                                    <td>{user.dob || 'N/A'}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {error && <p className="error-message">{error}</p>}
=======
    // static data remove whenadded from backend
    const users = [
        {
            id:"1",
            name:"Satish",
            phoneNumber:"9809673319",
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
                
>>>>>>> 53f4940fb78e0a981d93dc2fd2699a0cf6a0ca00
            </div>
        </div>
    );
};

<<<<<<< HEAD
export default UserItem;
=======
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                       <td>{user.name || N/A}</td>
                       <td>{user.phoneNumber || N/A}</td>
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
>>>>>>> 53f4940fb78e0a981d93dc2fd2699a0cf6a0ca00
