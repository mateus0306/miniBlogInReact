import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD4wWRv7BngUKbgwKClZuzMQPB8RCL5HrQ",
  authDomain: "miniblogone-4b93e.firebaseapp.com",
  projectId: "miniblogone-4b93e",
  storageBucket: "miniblogone-4b93e.appspot.com",
  messagingSenderId: "135899097835",
  appId: "1:135899097835:web:b64467aaaf7cc75575acae"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };