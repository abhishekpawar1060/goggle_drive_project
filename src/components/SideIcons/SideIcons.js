import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import '../../styles/SideIcons.css';

import google_calendar from '../../media/google_Calendar.webp';
import google_keep from '../../media/google_keep.png';
import google_task from '../../media/google_task.png';

function SideIcons() {
    
    return (
        <div className='sideIcons'>
            <div className='sideIcons_top'>
                <img src={google_calendar} alt='Google Calendar' />
                <img src={google_keep} alt='Google Keep' />
                <img src={google_task} alt='Google Task' />
            </div>

            <hr/>

            <div className='sideIcons_plusIcon'>
                <AddIcon />
            </div>

        </div>
    )
}

export default SideIcons
