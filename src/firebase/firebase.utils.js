import firebase from 'firebase/app'; 
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: "AIzaSyCGjwVVVJR1v07hrIrswBc8lYLD1OzHnpE",
   authDomain: "crwn-db-59d0a.firebaseapp.com",
   projectId: "crwn-db-59d0a",
   storageBucket: "crwn-db-59d0a.appspot.com",
   messagingSenderId: "571014877628",
   appId: "1:571014877628:web:09555dfb7df80ddf055bb9",
   measurementId: "G-TEB9GH1ZE4"
 }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 