
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDrdPnILuW_HR7SxEaAaWWmlrCld-KlNRo",
  authDomain: "unplug-15beb.firebaseapp.com",
  projectId: "unplug-15beb",
  storageBucket: "unplug-15beb.appspot.com",
  messagingSenderId: "923607332248",
  appId: "1:923607332248:web:067dc5f03bcc20edb8e7ed",
  measurementId: "G-QFYVS8C59Z"
};


const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
