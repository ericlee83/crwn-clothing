import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

const config = {
  apiKey: "AIzaSyD-89kmAXAmUPJQ70Jh-mNaGKw8rK1seY4",
  authDomain: "crwn-db-8d5fa.firebaseapp.com",
  databaseURL: "https://crwn-db-8d5fa.firebaseio.com",
  projectId: "crwn-db-8d5fa",
  storageBucket: "crwn-db-8d5fa.appspot.com",
  messagingSenderId: "379897229602",
  appId: "1:379897229602:web:f529c3b45f58753c2c357b",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
