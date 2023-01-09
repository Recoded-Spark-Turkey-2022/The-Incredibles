import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

export const app = initializeApp(firebaseConfig); // Initialize the app
export const db = getFirestore(app); // Initialize the firestore service
export const auth = getAuth(); // Initialize the auth service

export const googleProvider = new GoogleAuthProvider(); // Iinitialize the google provider
export const faceBookProvider = new FacebookAuthProvider(); // Iinitialize the google provider

export const storage = getStorage(app); // // Initialize Cloud Storage and get a reference to the service
