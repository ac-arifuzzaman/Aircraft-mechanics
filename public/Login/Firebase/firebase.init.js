import { initilizeApp } from 'firebase/app';
import firebaseConfig from "./firebase.config";

const initializeAuthnetication = () => {
    initilizeApp(firebaseConfig);
}

export default initializeAuthnetication;