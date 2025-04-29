import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_API_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_API_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_API_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_API_AUTH_APP_ID,
};

const app = initializeApp(firebaseConfig);