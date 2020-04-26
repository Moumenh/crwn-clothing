
// import firebase libraries that we need (auth,firestore which is the db)
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// initialize with our project key we get from firebase site
const config = {
    apiKey: "AIzaSyBV_BPmDYqPuUHzh7DxAREfG6WoVq2j-tE",
    authDomain: "crwn-db-9af4a.firebaseapp.com",
    databaseURL: "https://crwn-db-9af4a.firebaseio.com",
    projectId: "crwn-db-9af4a",
    storageBucket: "crwn-db-9af4a.appspot.com",
    messagingSenderId: "241991890095",
    appId: "1:241991890095:web:83520eb80ff9176a18105a",
    measurementId: "G-4HKG8JQMBX"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists){
      const { displayName, email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      } catch(error) {
        console.log('error creating user', error.message)
      }
    }
    return userRef;

  }

  firebase.initializeApp(config);       // all previous steps are initializing


  // make auth and firestore references to use their methods later on
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
