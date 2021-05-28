import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBCgnDKVloGy_AhsmQoDPZrs78Yaa64dRA",
  authDomain: "crwn-db-734b5.firebaseapp.com",
  projectId: "crwn-db-734b5",
  storageBucket: "crwn-db-734b5.appspot.com",
  messagingSenderId: "671019678365",
  appId: "1:671019678365:web:67b220c82cfdd77d507274",
  measurementId: "G-WSZGB98NNQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
