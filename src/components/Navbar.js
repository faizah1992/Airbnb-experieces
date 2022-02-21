import React from 'react'
import logo from '../images/airbnb 1.png'

export default function Navbar(){
    return(
        <div className="main-container">
            <nav className="navbar">
                <img src={logo} alt="airbnn logo" className="nav---logo"/>
            </nav>
            
        </div>
    )
}