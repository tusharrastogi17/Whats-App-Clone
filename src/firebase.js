// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDuMoqutmNOyW5w0NyQ0J0RQz1uesDbfRM",
  authDomain: "whats-app-93fca.firebaseapp.com",
  projectId: "whats-app-93fca",
  storageBucket: "whats-app-93fca.appspot.com",
  messagingSenderId: "740159719182",
  appId: "1:740159719182:web:f30fb4cbaf1ea64f9d395f",
  measurementId: "G-GSGQH0GNK3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;