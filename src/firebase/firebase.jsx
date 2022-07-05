import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB3zHyho8NleI9LiXc9xNFW46V4ge5T1I8",
  authDomain: "citytravel-app.firebaseapp.com",
  projectId: "citytravel-app",
  storageBucket: "citytravel-app.appspot.com",
  messagingSenderId: "997516980052",
  appId: "1:997516980052:web:c7a4b90376aa2a649f22c1"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
