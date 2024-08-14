import React from 'react'
import { Link } from 'react-router-dom'
import './ExpertItem.css'

const ExpertItem = () => {
  const experts = [
    {
      id: 1,
      image: "../src/assets/images/logo.png",
      name: "Satish",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    // Add more blog entries here...
  ];

  // Function to truncate content to 50 words
  const truncateContent = (content, wordLimit) => {
    const words = content.split(' ');
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return content;
  };

  return (
    <div>
        <div className='blogs_list'>
        <div>
            <div className='back_link'>
            <h4> &gt;&gt; </h4> <Link to='/dashboard'><h4>Dashboard </h4></Link><h4>/</h4><h4> Experts</h4>
            </div> 
            <hr style={{marginTop:'20px'}}/>
            <div className='Dashboard_title'>
                <h1>Expert List</h1>
                <Link to="/addExpert">
                    <button>Add Experts</button>
                </Link>
            </div>
        </div>
        <div className='blog_table'>
            <table border="2" >
                <thead>
                  <th>S.N</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Content</th>
                  <th>Action</th>
                </thead>
                {/* fetch the data from here (Loop start) */}

                <tbody>
                  {experts.map((expert) => (
                    <tr key={expert.id}>
                      <td className='table_sn'>{expert.id}</td>
                      <td className='table_img'><img src={expert.image} alt={expert.name} /></td>
                      <td className='table_title'>{expert.name}</td>
                      <td className='table_content'>{truncateContent(expert.content, 50)}</td>
                      <td style={{textAlign:'center'}}>
                        <Link to="/editExpert" ><button className='edit_btn'>Edit</button></Link>
                        <button className='delete_btn'>Delete</button>
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

export default ExpertItem