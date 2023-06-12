import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBXiL5I52-VGtOrUW0nY5ncR9gPnXKYegY",
  authDomain: "instagram-clone-rn-fc4cf.firebaseapp.com",
  projectId: "instagram-clone-rn-fc4cf",
  storageBucket: "instagram-clone-rn-fc4cf.appspot.com",
  messagingSenderId: "955317768534",
  appId: "1:955317768534:web:dc08b4abc5935b82c306f7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
