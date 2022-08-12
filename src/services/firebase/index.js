import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDR6jyqEelyf_uwSRuLHzsEQ4lgpKzLUYE",
  authDomain: "reactjs-595a8.firebaseapp.com",
  projectId: "reactjs-595a8",
  storageBucket: "reactjs-595a8.appspot.com",
  messagingSenderId: "157312832508",
  appId: "1:157312832508:web:6acd9d8d1e7511c7069879"
};

//Conexion al proyecto de firebase
const app = initializeApp(firebaseConfig);

//Acceso a la base de datos del proyecto
export const db = getFirestore(app);