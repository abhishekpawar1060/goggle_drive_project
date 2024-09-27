import "../../styles/NewFile.css"
import AddIcon from '@mui/icons-material/Add';

function NewFile() {
  return (
    <div className='newFile'>
      <div className='newFile_container'>
        <AddIcon />
        <p>New</p>
      </div>
    </div>
  )
}

export default NewFile
