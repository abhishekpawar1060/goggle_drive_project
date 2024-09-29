import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/sidebar/Sidebar';
import FileView from './components/FilesView/FileView';
import SideIcons from './components/SideIcons/SideIcons';
import GDriveLogo from "./media/drive_icon.png";
import { auth, provider, signInWithPopup } from './firebase';

function App() {

  // const [user, setUser] = useState({
  //   displayName: "Abhishek Pawar",
  //   email: "abhishekdeveloper7218@gmail.com",
  //   emailVerified: true,
  //   phoneNumber: null,
  //   photoURL: 'https://lh3.googleusercontent.com/-gDc-jlALYBU/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkm1K3lt49btYfmlaITRaxl7o4kN3g/photo.jpg?sz=46',
  // })

  const [user, setUser] = useState();

  const handleLogin = () => {
    if (!user) {
        console.log(user);
        
        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user);
        })
        .catch((error) => {
            console.error("Error during sign-in:", error);
        });
    }
};


  return (
    <div className='App'>

      {
        user ? (
          <>
            <Header userPhoto={user.photoURL}/>
        
            <div className='app_main'>
              <Sidebar />
              <FileView />
              <SideIcons />
            </div>
          </>
        ) : (
          <div className='app_login'> 
            <img src={GDriveLogo} alt='Google Drive'/>
            <button onClick={handleLogin}>Log in to Google Drive</button>
          </div>
        )
      }
      
    
    </div>
  );
}

export default App;
