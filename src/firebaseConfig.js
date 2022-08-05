import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDEOVpxqXgt5l8DfjwXT02n7VJd2_d7Ha0",
  authDomain: "kipnote.firebaseapp.com",
  projectId: "kipnote",
  storageBucket: "kipnote.appspot.com",
  messagingSenderId: "760947642390",
  appId: "1:760947642390:web:ea153c4103ea2d39e9e537"
};

export const app = initializeApp(firebaseConfig);