import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const handleSubmit =(e)=>{
        e.preventDefault();
        navigate('/dashboard')
        
    }
  return (
    <div className='loginbox'> 
        <div style={{textAlign:'center'}}>       
            <span>
                <svg class="feather feather-unlock" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <rect height="11" rx="2" ry="2" width="18" x="3" y="11"/>
                <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
                </svg>
            </span>
            <form action="" onSubmit={handleSubmit}>
                <p>Login</p>
                <input type="text" name='email' placeholder='Email*' required/><br />
                <input type="text" name='password' placeholder='Password*' required /><br />
                <input type="submit" value="Submit"  name='submit'/>
            </form>
        </div>
    </div>
  )
}

export default Login