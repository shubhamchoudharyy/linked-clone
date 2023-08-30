import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAZFKDYu-0TlOlTTA5uRy4yeCOlAt3Ea58",
  authDomain: "clone-45fac.firebaseapp.com",
  projectId: "clone-45fac",
  storageBucket: "clone-45fac.appspot.com",
  messagingSenderId: "769184282402",
  appId: "1:769184282402:web:9bc707aa0287be44a1d77b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(firebaseApp);
var provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});

// Initialize Firestore
const firestore = getFirestore(firebaseApp);

// Initialize Storage
const storage = getStorage(firebaseApp);

export const db=getFirestore(firebaseApp);

export { auth, provider, firestore, storage };

export default firebaseApp;
