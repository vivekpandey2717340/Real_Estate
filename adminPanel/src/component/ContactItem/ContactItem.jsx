import React from 'react'
import { Link } from 'react-router-dom'

const ContactItem = () => {
  const contacts =[
    {
        id:'1',
        name:'satish',
        email:'satish@gmail.com',
        message:"hi there",
        number:'98097663',
        inqueryFor:'Sale',
        
    }
]
  return (
    <div>
        <div className='Users_list'>
            <div>
                <div className='back_link'>
                    <h4> &gt;&gt; </h4> 
                    <Link to='/dashboard'><h4>Dashboard </h4></Link>
                    <h4>/</h4><h4> Inquery</h4>
                </div> 
                <hr style={{marginTop:'20px'}}/>
                <div className='Dashboard_title'>
                    <div className='inquery_btn'>
                        <Link to="/inquery "><h2>Inquery List</h2></Link> 
                        <Link to="/contact"><h2 style={{background:'var(--gray)'}}>Contact List</h2></Link>
                    </div>
                </div>
            </div>
            <div className='user_table'>
                <table border="2">
                    <thead>
                        <tr>
                            <th style={{width:'20px'}}>S.N</th>
                            <th>Full Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Inquery For</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.length > 0 ? (
                            contacts.map((contact, index) => (
                                <tr key={contact.id}>
                                    <td className='table_sn'>{index + 1}</td>
                                    <td>{contact.name || 'N/A'}</td>
                                    <td>{contact.number || 'N/A'}</td>
                                    <td>{contact.email || 'N/A'}</td>
                                    <td>{contact.inqueryFor || 'N/A'}</td>
                                    <td>{contact.message || 'N/A'}</td>
                                    <td style={{textAlign:'center'}}>
                                       <a href={`mailto:${contact.email}?from=satish463143@gmail.com`} traget='_blank'><button className='edit_btn'>Response</button></a>
                                        {/* <button className='delete_btn'>Close</button> */}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {/* {error && <p className="error-message">{error}</p>} */}
            </div>
        </div>
    </div>
  )
}

export default ContactItem