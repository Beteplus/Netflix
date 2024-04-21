import React from 'react'
import './Header.css'
import Netflix from "../../Assets/Images/Netflix.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
    <>
    <div className='header_outer_container'>
        <div className='header_container'>
            <div className='header_left'>
                <ul>
                  <li><img src={Netflix} alt='netflix logo'width='100' /></li>
                    <li>Home</li>
                    <li>Tv Show</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyList</li>
                    <li>Browse By Language</li>
                    <li></li>
                </ul>

            </div>
            < div className='header_right'>

              <ul>
                <li><SearchIcon/></li>
                <li><NotificationsIcon/></li>
                <li><AccountBoxIcon/></li>
                <li><ArrowDropDownIcon/></li>
              </ul>
            </div>

        </div>

    </div>

    </>
  )
}

export default Header