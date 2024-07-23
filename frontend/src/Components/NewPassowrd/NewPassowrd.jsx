import React from 'react'

const NewPassowrd = ({ setCurrentView }) => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        setCurrentView('login')
      }
  return (
    <div>
        <div className="login_form">
        <form action="post" onSubmit={handleSubmit}>
            <h1>Create New Password</h1>
            <label htmlFor="password">Password</label><br />
            <input type="password" name="password" placeholder="Password" required /><br />
            <label htmlFor="confirmPassword">Password</label><br />
            <input type="password" name="confirmPassword" placeholder="confirmPassword" required /><br />
            <input className="submit" type="submit" value="Create Password" name="newPassowrd" /><br />
        </form>
        
        </div>
    </div>
  )
}

export default NewPassowrd