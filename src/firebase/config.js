import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBupkqx2QAVBRbjFQ9Apj2iMwLY7MR7yBQ",
    authDomain: "ojt-react.firebaseapp.com",
    projectId: "ojt-react",
    storageBucket: "ojt-react.appspot.com",
    messagingSenderId: "994805892768",
    appId: "1:994805892768:web:0bead0659b1aff219c2bc5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app, "gs://ojt-react.appspot.com");
export { db, auth, storage };