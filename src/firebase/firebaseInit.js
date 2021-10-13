import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD1gB1r9o6-4n9BFavKbj33aUnmiIJ3MYQ",
    authDomain: "fireblog-c823d.firebaseapp.com",
    projectId: "fireblog-c823d",
    storageBucket: "fireblog-c823d.appspot.com",
    messagingSenderId: "685753036705",
    appId: "1:685753036705:web:2f849ac276e09d8c9aa5e0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();