// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB8E94VLl-SoJkFZmWmzX68SGYtKxs1cTI',
  authDomain: 'instagram-clone-44d3b.firebaseapp.com',
  projectId: 'instagram-clone-44d3b',
  storageBucket: 'instagram-clone-44d3b.appspot.com',
  messagingSenderId: '230478441117',
  appId: '1:230478441117:web:cb51b768bae94f006b8274',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
