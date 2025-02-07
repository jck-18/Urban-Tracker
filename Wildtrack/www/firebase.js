const firebaseConfig = {
  apiKey: "AIzaSyBv3RwEkfIVOWhJE9WrTEzS99Ngwy_WkP4",
  authDomain: "wildtrack-9e0a4.firebaseapp.com",
  projectId: "wildtrack-9e0a4",
  storageBucket: "wildtrack-9e0a4.appspot.com",
  messagingSenderId: "280566308737",
  appId: "1:280566308737:android:9ad63a67dc786b2609d280",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
