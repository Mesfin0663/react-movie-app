import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <div className='nav_container'>
        <div className='nav_wrapper'>
              <a href="" className='nav_logo'>HaMovies</a>

              <div className='nav_search'>
                <input type="text" placeholder='Search movies'/>
              </div>
              <nav className='nav_list'>
                   <ul>
                    <li className='nav_list_itme'><a href="">Register</a></li>
                   </ul>
              </nav>
        </div>
    </div>
  )
}

export default Navbar
