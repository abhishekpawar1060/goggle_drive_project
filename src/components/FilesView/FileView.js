import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from "firebase/firestore";
import FileCart from './FileCart';
import FileItem from './FileItem';
import "../../styles/FileView.css";

function FileView() {

  const [files, setFiles] = useState([]);

  const fetchPost = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "myFiles"));
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  
      setFiles(newData);
      console.log(newData); 
  
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };
  

  useEffect(() => {
    fetchPost();
  }, [files]);

  return (
    <div className='fileView'>
      <div className='fileView_row'>
        {
          files.slice(0, 5).map(( item, id ) => (           
            <FileCart 
              key={id}
              name={item.caption} 
            />
          ))
        }
      </div>

      <div className='fileView_titles'>
        <div className='fileView_titles-left'>
          <p>Name</p>
        </div>

        <div className='fileView_titles-right'>
          <p>Last Modified</p>
          <p>Files size</p>
        </div>
      </div>

      {
        files.map(({ id, caption, timestamp, fileUrl, size }) => {
          if (!caption) return null;

          return (
            <FileItem 
              key={id}
              id={id}
              caption={caption}
              timestamp={timestamp}
              fileUrl={fileUrl}
              size={size}
            />
          );
        })
      }

    </div>
  )
}

export default FileView
