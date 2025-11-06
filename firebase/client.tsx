// /firebase/client.ts  (CLIENT — web SDK only)
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuIedOg28idlA-aTWwW_SsxK92S9mpx1o",
  authDomain: "verisium-95752.firebaseapp.com",
  projectId: "verisium-95752",
  storageBucket: "verisium-95752.firebasestorage.app",
  messagingSenderId: "771189003028",
  appId: "AIzaSyAAqp04JTlpebxGLs5AOmEOlBEgnVeFyLQ",
  measurementId: "G-WWE882X4M1",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
