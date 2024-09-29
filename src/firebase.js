// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyl3fRwedmHInZDx_dl2lWLAufTvtZxUk",
  authDomain: "drive-project-cc9b7.firebaseapp.com",
  projectId: "drive-project-cc9b7",
  storageBucket: "drive-project-cc9b7.appspot.com",
  messagingSenderId: "940296931571",
  appId: "1:940296931571:web:900e478a09c717cb0c4f86"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { auth, db, storage, provider, signInWithPopup }