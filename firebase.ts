import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY!,
  authDomain: "alfred2-b3024.firebaseapp.com",
  projectId: "alfred2-b3024",
  storageBucket: "alfred2-b3024.appspot.com",
  messagingSenderId: "512021513827",
  appId: "1:512021513827:web:fef26b87f728ec2ddd5a56"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };