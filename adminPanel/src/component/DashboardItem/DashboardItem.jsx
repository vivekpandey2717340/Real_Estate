import React from 'react'
import './DashboardItem.css'
import { Link } from 'react-router-dom'

const DashboardItem = () => {
  return (
    <div className='banner_box'>
        <div className='back_link'>
            <h4> &gt;&gt; </h4>
            <Link to='/dashboard'><h4>Dashboard </h4></Link>            
        </div>
        <hr />
        <div className='Dashboard_title'>
            <div style={{display:'flex', alignItems:'center',gap:'10px'}}>
                <span>
                    <svg 
                        height="32" 
                        id="icon"  
                        viewBox="0 0 32 32" 
                        width="32" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                        <style>
                            {`
                            .cls-1 {
                                fill: none;
                            }
                            `}
                        </style>
                        </defs>
                        
                        <path d="M30,20a13.8535,13.8535,0,0,0-2.2291-7.5288l-1.4452,1.4453A11.8917,11.8917,0,0,1,28,20Z" />
                        <path d="M28,9.414,26.5859,8,18.019,16.5669A3.9521,3.9521,0,0,0,16,16a4,4,0,1,0,4,4,3.9533,3.9533,0,0,0-.5669-2.0191ZM16,22a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,16,22Z" />
                        <path d="M16,8a11.9086,11.9086,0,0,1,6.0833,1.6743l1.4536-1.4536A13.9773,13.9773,0,0,0,2,20H4A12.0137,12.0137,0,0,1,16,8Z" />
                        <rect className="cls-1" data-name="&lt;Transparent Rectangle&gt;" height="32" id="_Transparent_Rectangle_" width="32" />
                    </svg>
                </span>
                <h1>Dashboard</h1>
            </div>
        </div>
        <div className='Dashboard_grid'>
            <div className="dashboard_box"style={{background:'#D1E6D0'}}>
                <span>
                    <svg class="feather feather-users" fill="none" height="44" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="44" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </span>
                <h4>
                    Total Users
                </h4>
                <h1>
                    56274
                </h1>
            </div>
            <div className="dashboard_box"style={{background:'#F1BEA0'}}>
                <span>
                    <svg class="feather feather-users" fill="none" height="44" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="44" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </span>
                <h4>
                    All Properties
                </h4>
                <h1>
                    56274
                </h1>
            </div>
            <div className="dashboard_box" style={{background:'#93C8E6'}}>
                <span>
                    <svg class="feather feather-users" fill="none" height="44" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="44" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </span>
                <h4>
                    Available Properties
                </h4>
                <h1>
                    56274
                </h1>
            </div>
            <div className="dashboard_box" style={{background:'#93C8E6'}}>
                <span>
                    <svg class="feather feather-users" fill="none" height="44" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="44" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </span>
                <h4>
                    Sold Properties
                </h4>
                <h1>
                    56274
                </h1>
            </div>
            <div className="dashboard_box"style={{background:'#D1E6D0'}}>
                <span>
                    <svg class="feather feather-users" fill="none" height="44" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="44" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </span>
                <h4>
                   BLogs
                </h4>
                <h1>
                    56274
                </h1>
            </div>
            <div className="dashboard_box"style={{background:'#F1BEA0'}}>
                <span>
                    <svg class="feather feather-users" fill="none" height="44" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="44" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </span>
                <h4>
                    Our Experts
                </h4>
                <h1>
                    56274
                </h1>
            </div>
            <div className="dashboard_box"style={{background:'#F1BEA0'}}>
                <span>
                    <svg class="feather feather-users" fill="none" height="44" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="44" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </span>
                <h4>
                    New Inquries
                </h4>
                <h1>
                    56274
                </h1>
            </div>
            <div className="dashboard_box"style={{background:'#93C8E6'}}>
                <span>
                    <svg class="feather feather-users" fill="none" height="44" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="44" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </span>
                <h4>
                    New Contacts
                </h4>
                <h1>
                    56274
                </h1>
            </div>
        </div>
    </div>
  )
}

export default DashboardItem