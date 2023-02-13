import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjq5nfb3LOE0H5xEevnq9-Wqp5Z2omTAI",
  authDomain: "herogames-4c354.firebaseapp.com",
  projectId: "herogames-4c354",
  storageBucket: "herogames-4c354.appspot.com",
  messagingSenderId: "830523645590",
  appId: "1:830523645590:web:957a89551ed985604d6cb7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;