import React from 'react'
import '../../styles/Header.css';

import GDriveLogo from '../../media/drive_icon.png';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { HelpOutline, Settings } from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';


function Header({ userPhoto }) {
  return (
    <div className='header'>
      <div className='header_logo'>
        <img src={GDriveLogo} alt='' />
        <span>Drive</span>
      </div>

      <div className='header_searchContainer'>
        <div className='header_searchBar'>
          <SearchIcon />
          <input type='text' placeholder='Search in Drive' />
          <ExpandMoreIcon />
        </div>
      </div>

      <div className='header_icons'>
        <span>
          <HelpOutline />
          <Settings />
        </span>

        <AppsIcon />
        <img src={userPhoto} alt='userphoto' />
      </div>
    </div>
  )
}

export default Header;
