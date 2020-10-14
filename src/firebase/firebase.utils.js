import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
 apiKey: "AIzaSyC3EUTFZwKbV3ybnb8Icl_8ucutoekWz6k",
    authDomain: "closet-4c8cf.firebaseapp.com",
    databaseURL: "https://closet-4c8cf.firebaseio.com",
    projectId: "closet-4c8cf",
    storageBucket: "closet-4c8cf.appspot.com",
    messagingSenderId: "356521024521",
    appId: "1:356521024521:web:bf57b09f969076d5812cd8",
    measurementId: "G-XSWZ772XLL"
};

export const createUserProfileDocument = async (userAuth,additionalData) => {

 if(!userAuth) return;

 const userRef= firestore.doc(`users/${userAuth.uid}`);

 const snapShot = await userRef.get()

 if(!snapShot.exists)
 {
   const {displayName, email} = userAuth;
   const createdAt = new Date();

   try 
   {
    await userRef.set({
     displayName,
     email,
     createdAt,
     ...additionalData
    })
   }
   catch (error)
   {
     console.log('error creating user' , error.message);
   }
 }

 return userRef;

}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account' });
 export const signInWithGoogle = () => auth.signInWithPopup(provider);
 //export const signInWithGoogle = () => console.log("clicked");

export default firebase;