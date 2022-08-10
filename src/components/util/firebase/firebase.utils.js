import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2sl0DCGcHaxxQzqwUoWyMngzlvvkQ2VQ",
  authDomain: "crown-d8f7e.firebaseapp.com",
  projectId: "crown-d8f7e",
  storageBucket: "crown-d8f7e.appspot.com",
  messagingSenderId: "837664855617",
  appId: "1:837664855617:web:0004741e5808180d19d8c0",
  measurementId: "G-9W40XX69JT",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googProvider = new GoogleAuthProvider();
googProvider.setCustomParameters({
  promt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googProvider);

export const db = getFirestore();
export const CreateDbDatafromAuth = async (userAuth) => {
  const userRef = doc(db, "users", userAuth.uid);
  console.log(userRef);
  const userShanpshot = await getDoc(userRef);
  if (!userShanpshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const SingUpWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const loginWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
export const signout = async (auth) => {
  await signOut(auth);
};

export const onAuthStateChangedListner = (callback) => {
  onAuthStateChanged(auth, callback);
};
