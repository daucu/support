import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhdw-rNwwCAS5N6FkoIBiYzlQ9JOENSdI",
  authDomain: "pnb-support.firebaseapp.com",
  projectId: "pnb-support",
  storageBucket: "pnb-support.appspot.com",
  messagingSenderId: "1049796532224",
  appId: "1:1049796532224:web:3bcf8fd75b0811324720e5",
  measurementId: "G-C0MWPCP15D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const firestore = getFirestore(app);

export { firestore };
export { database };
