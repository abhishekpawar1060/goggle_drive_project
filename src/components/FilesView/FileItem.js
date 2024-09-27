import React from 'react'
import "../../styles/FilteItem.css";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';


const monthName = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function FileItem({ id, caption, timestamp, fileUrl, size }) {

    const fileDate = timestamp ? `${timestamp.toDate().getDate()} ${monthName[timestamp.toDate().getMonth()]} ${timestamp.toDate().getFullYear()}` : "N/A";

    const getReadableFileSizeString = (fileSizeInBytes) => {
        let i = -1;
        const byteUnits = [' KB', ' MB', ' GB', ' TB', ' PB', ' EB', ' ZB', ' YB'];

        do{
            fileSizeInBytes = fileSizeInBytes / 1024;
            i++;
        }while(fileSizeInBytes > 1024);

        return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
    };

    return (
        <div className='fileItem'>
            <a href={fileUrl} target='_blank' download>
                <div className='fileItem-left'>
                    <InsertDriveFileIcon />
                    <p>{caption}</p>
                </div>

                <div className='fileItem-right'>
                    <p>{fileDate}</p>
                    <p>{getReadableFileSizeString(size)}</p>
                </div>
            </a>
        </div>
    )
}

export default FileItem
