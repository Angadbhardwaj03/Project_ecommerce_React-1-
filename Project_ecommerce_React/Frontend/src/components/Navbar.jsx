import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
        <div className="left">
             <Link to="/admin"><h2>Shopy</h2></Link>
        </div>
        <div className='search'>
            <input type="text" placeholder="Search products..."/>
        </div>
        <div className="right">
          <Link to="/admin/products/add">Add new Product</Link>&nbsp;&nbsp;
          <Link to="/adminlogin" className="admin-login-btn">Admin Login</Link>&nbsp;&nbsp;
          <Link to="/users" className="user-login-btn">user Login</Link>&nbsp;&nbsp;
        </div>
        
    </nav>
  )
}

export default Navbar