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

// userAuth - обьект пользователь (инфа из firebase)
export const createUserProfileDocument = async (userAuth, additionalData) => {
   // если юзер разлогинен и функция не отдает обьект, то остановить выполнение
   if (!userAuth) return;
   // предварительно вносим наш user.uid в коллекцию users в нашей firebase 
   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot = await userRef.get();
   
   // если не существует записи с таким id (exists = false)
   if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      // добавляем запись в базу методом set
      try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
         });
      } catch (error) {
         console.log('error creating user', error.message);
      }
   }
   return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 