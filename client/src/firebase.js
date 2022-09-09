// import dotenv from 'dotenv';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// dotenv.config();
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA1je3I8WxX1IySWeL_jekCO7T5zGN0kdw',
  authDomain: 'videoapp-2e782.firebaseapp.com',
  projectId: 'videoapp-2e782',
  storageBucket: 'videoapp-2e782.appspot.com',
  messagingSenderId: '916868133230',
  appId: '1:916868133230:web:61cad3e4c851d042d9117f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
