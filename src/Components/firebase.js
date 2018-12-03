import firebase from 'firebase';

/*const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}; */
const config = {
    apiKey: "AIzaSyCq8b5uQ7kbPTR3d6LpDwKKwHiM8zMz2Lg",
    authDomain: "moodnimal.firebaseapp.com",
    databaseURL: "https://moodnimal.firebaseio.com",
    projectId: "moodnimal",
    storageBucket: "moodnimal.appspot.com",
    messagingSenderId: "38572678760"
};
firebase.initializeApp(config);


export default firebase;