import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCQ0CQNlGQgNYxa1mbsOLeiwNabfIykRU",
  authDomain: "todo-app-78d10.firebaseapp.com",
  projectId: "todo-app-78d10",
  storageBucket: "todo-app-78d10.appspot.com",
  messagingSenderId: "132758011651",
  appId: "1:132758011651:web:d2c0fa0281bd32d4e9b336",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
