import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBlB_07P81ec4LueYyDBKtkYNpKlAzGWx8",
  authDomain: "reactjs2-420f5.firebaseapp.com",
  projectId: "reactjs2-420f5",
  storageBucket: "reactjs2-420f5.appspot.com",
  messagingSenderId: "1061172444158",
  appId: "1:1061172444158:web:0783d783b43d35dd151eaf"
};

//Conexion al proyecto de firebase
const app = initializeApp(firebaseConfig);

//Acceso a la base de datos del proyecto
export const db = getFirestore(app);