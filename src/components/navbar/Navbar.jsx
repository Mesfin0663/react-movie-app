import React from 'react'
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function Navbar() {
  return (
    <div className='nav_container'>
        <div className='nav_wrapper'>
              <div className='nav_logo'>
                <MenuIcon style={{fontSize:"30px"}}/>
              <a href="" className='nav_logo_a'>HaMovies</a>

              </div>
              <div className='nav_search'>
              <button className='search_button'>filter</button>

                <input type="text" placeholder='Search movies' className='search_input'/>
                <div><SearchIcon/></div>
              </div>
              <div className='nav_mobile_search'><SearchIcon/></div>
              <nav className='nav_list'>
                   <ul>
                    <li className='nav_list_itme'><a href="" className='nav_login'>Login</a></li>
                   </ul>
              </nav>
              <div className="nav_mobile_arrow">
                <ArrowRightAltIcon size="large"/>
              </div>
        </div>
    </div>
  )
}

export default Navbar
