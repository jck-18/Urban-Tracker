// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBv3RwEkfIVOWhJE9WrTEzS99Ngwy_WkP4",
  authDomain: "wildtrack-9e0a4.firebaseapp.com",
  projectId: "wildtrack-9e0a4",
  storageBucket: "wildtrack-9e0a4.firebasestorage.app",
  messagingSenderId: "280566308737",
  appId: "1:280566308737:android:9ad63a67dc786b2609d280"
};  

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
