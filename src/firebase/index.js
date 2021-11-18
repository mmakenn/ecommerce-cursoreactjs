import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAn8JVgGVYc-tQIKCBcFgz7inlYBgZW3dU",
    authDomain: "ecommerce-cursoreactjs.firebaseapp.com",
    projectId: "ecommerce-cursoreactjs",
    storageBucket: "ecommerce-cursoreactjs.appspot.com",
    messagingSenderId: "514219862749",
    appId: "1:514219862749:web:e04d8a2ae281318a5cc934"
  };

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };

export const db = getFirestore(app);