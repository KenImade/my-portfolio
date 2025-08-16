import { initializeApp, getApps } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
}

const app = getApps()[0] ?? initializeApp(firebaseConfig);
let db: Firestore;
let auth;

try {
  // Initialize Firestore
  db = getFirestore(app);
  console.log('✅ Firestore initialized successfully');

  // Initialize Auth
  auth = getAuth(app);
  console.log('✅ Firebase Auth initialized successfully');

  // Test Firestore connection
  console.log('🧪 Testing Firestore connection...');
  console.log('🧪 Firestore object:', db);
  console.log('🧪 Firestore app name:', db.app.name);

} catch (error: any) {
  console.error('❌ Firebase initialization error:', error);
  console.error('❌ Error details:', {
    message: error.message,
    code: error.code,
    stack: error.stack
  });
}

export { db, auth };
export default app;