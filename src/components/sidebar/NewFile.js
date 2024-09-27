import "../../styles/NewFile.css"
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';
import Modal from "@mui/material/Modal";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import { storage, db } from "../../firebase"
import { useState } from "react";
 

function getModalStyle() {
  return{
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
}

const useStyle = makeStyles((theme) => ({
  paper:{
    position: 'absolute',
    width: 400,
    backgroundColor: '#fff',
    border: '2px solid #000',
    boxShadow: '5px 5px 10px rgba(0,0,0,0.5)',
    padding: '16px',
  }
}))

function NewFile() {

  const classes = useStyle();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);


  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }


  const handleChange = (e) => {
    if(e.target.files[0]){
      setFile(e.target.files[0]);
    }
  }


  const handleUpload = () => {
    setUploading(true);
    
    const fileRef = ref(storage, `files/${file.name}`);
  
    uploadBytes(fileRef, file).then((snapshot) => {
      console.log(snapshot);
  
      getDownloadURL(fileRef).then((url) => {
        const sizeInBytes = snapshot.metadata.size; 
  
        addDoc(collection(db, 'myFiles'), {
          timestamp: serverTimestamp(),
          caption: file.name,
          fileUrl: url,
          size: sizeInBytes, 
        }).then(() => {
          setUploading(false);
          setOpen(false);
          setFile(null);
        });
      });
    }).catch(error => {
      console.error("Upload failed: ", error);
      setUploading(false);
    });
  };

  return (
      <div className='newFile'>
        <div className='newFile_container' onClick={handleOpen}>
          <AddIcon />
          <p>New</p>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div style={modalStyle} className={classes.paper}>
            <p>Select files you want to upload!</p>
            {uploading ? (
              <p>Uploading...</p>
            ) : (
              <>
                <input type="file" onChange={handleChange} />
                <button onClick={handleUpload}>Upload</button>
              </>
            )}
          </div>
        </Modal>
      </div>
  )
}

export default NewFile
