import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyD_ie-M1_DpbMcokcv6v_Z32iCUpUhdPi0",
    authDomain: "vue-2-trendible.firebaseapp.com",
    projectId: "vue-2-trendible",
    storageBucket: "vue-2-trendible.appspot.com",
    messagingSenderId: "474394505014",
    appId: "1:474394505014:web:4d9263256da97eb6790d97"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimeStamp;

export { timestamp };
export default firebaseApp.firestore();