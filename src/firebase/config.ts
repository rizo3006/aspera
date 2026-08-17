import {
  initializeApp,
  getApps,
  getApp,
} from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBsyWUzCJl1q2PCKKTmjZrWG440--tnrac",
  authDomain: "aspera-3580e.firebaseapp.com",
  projectId: "aspera-3580e",
  storageBucket: "aspera-3580e.firebasestorage.app",
  messagingSenderId: "389473309529",
  appId: "1:389473309529:web:fe191a6a4c8e8dfc897248",
};

const app =
  getApps().length > 0
    ? getApp()
    : initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const storage = getStorage(app);

export default app;