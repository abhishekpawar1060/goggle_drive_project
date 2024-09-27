import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/sidebar/Sidebar';
import FileView from './components/FilesView/FileView';

function App() {

  const [user, setUser] = useState({
    displayName: "Abhishek Pawar",
    email: "abhishekdeveloper7218@gmail.com",
    emailVerified: true,
    phoneNumber: null,
    photoURL: 'https://lh3.googleusercontent.com/-gDc-jlALYBU/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkm1K3lt49btYfmlaITRaxl7o4kN3g/photo.jpg?sz=46',
  })

  return (
    <div className='App'>
      <Header userPhoto={user.photoURL}/>
      
      <div className='app_main'>
        <Sidebar />
        <FileView />
      </div>
    
    </div>
  );
}

export default App;
