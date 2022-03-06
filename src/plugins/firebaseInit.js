// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
    apiKey: "AIzaSyDVNx2NJ0oQH_YqeW6Q9iy7-OfomkNqt28",
    authDomain: "database-199f4.firebaseapp.com",
    projectId: "database-199f4",
    storageBucket: "database-199f4.appspot.com",
    messagingSenderId: "945508017157",
    appId: "1:945508017157:web:77cf53888d080b1442286c",
    measurementId: "G-03LRJ09RHB"
});

const db = getFirestore(firebaseApp);
export default db