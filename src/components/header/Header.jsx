import React from 'react'
import './header.css'
import backgroind1 from "../../assets/background1.jpg"
function Header() {
  return (
    <div className='header_container'>
         <div className='header_movie_about'>
         <h1 className='header_movie_title'>INDIAN JONES AND THE DIAL OF DESTINY</h1>
        <div className='header_movie_detail'>
            <p>Action</p>
            <p>Drama</p>
            <p>Fantacy</p>
        </div>
         </div>

        <img className='header_background' src={backgroind1} alt="background" />
    </div>
  )
}

export default Header
