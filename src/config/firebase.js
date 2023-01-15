// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAePp4LSEQs8S9eYudICsVefNBx3RwuvZ4",
  authDomain: "web3game-952cd.firebaseapp.com",
  projectId: "web3game-952cd",
  storageBucket: "web3game-952cd.appspot.com",
  messagingSenderId: "659839738439",
  appId: "1:659839738439:web:5fb594e2b765a0789f0762",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function createUser(username, email, password) {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("Successfully created user: ", user.uid);

    const usersRef = collection(db, "users");

    if (username.includes(" ")) {
      throw new Error("Username should not contain spaces.")
    }

    await setDoc(doc(usersRef, user.uid), {
      username,
    });

    localStorage.setItem("user", JSON.stringify({ username }))
  } catch (err) {
    signOutUser();
    return err
  }
}

async function signInUser(email, password) {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      localStorage.setItem("user", JSON.stringify(data));

      return data;
    } else {
      console.log("No such document!");
    }
  } catch (err) {
    signOutUser();
    return err;
  }
}

function signOutUser() {
  localStorage.removeItem("user");
  signOut(auth);
}

async function addDataToUser(uid, data) {
  const userRef = doc(db, "users", uid);
  await setDoc(userRef, data, { merge: true });
}

export { auth, createUser, signInUser, signOutUser, addDataToUser };
