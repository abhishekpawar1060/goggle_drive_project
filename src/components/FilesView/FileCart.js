import React from 'react';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import '../../styles/FileCard.css';

function FileCart({ name }) {
    console.log(name);
    
    return (
        <div className='fileCard'>
            <div className='fileCard-top'>
                <InsertDriveFileIcon style={{ fontSize: 130 }} />
            </div>

            <div className='fileCard-botton'>
                <p>{name}</p>
            </div>

        </div>
  )
}

export default FileCart
