import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCKI4-CMfSRQjif5mfwFc50QrHHjDHWja4",
  authDomain: "full-website-b641c.firebaseapp.com",
  projectId: "full-website-b641c",
  storageBucket: "full-website-b641c.appspot.com",
  messagingSenderId: "813146281336",
  appId: "1:813146281336:web:73f7113fc5d69ac23d648d",
  measurementId: "G-G6Q0NBGZ9B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);
const storage = getStorage(app);

export { storage, fireStore };
