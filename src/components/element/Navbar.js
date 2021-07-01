import React from 'react'
import { Link } from 'react-router-dom'
const Navbar=()=>{
    return(
        <div className="nav-container" >
            <div className="nav-icon" ><Link to="/">Contact</Link></div>
            <h2 className="nav-icon" >Contact List</h2>
            <div className="nav-icon"><Link to="/contact/add">Add Contact</Link></div>
        </div>
    )
}
export default Navbar