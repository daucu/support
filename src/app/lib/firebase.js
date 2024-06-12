import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAWsbEtU6qyarBUQ9D6Pk_kZ7wW5uFLPo",
  authDomain: "support-01-ee56b.firebaseapp.com",
  projectId: "support-01-ee56b",
  storageBucket: "support-01-ee56b.appspot.com",
  messagingSenderId: "815180754850",
  appId: "1:815180754850:web:565cec885b00535d880cfb",
  measurementId: "G-1Q83LVR1E8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const firestore = getFirestore(app);

export { firestore };
export { database };
