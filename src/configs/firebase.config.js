// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  // apiKey: "AIzaSyAEMHm1OJCr13RRMOq6RPPBKZR5cb2nNK0",
  // authDomain: "fir-test-f9e66.firebaseapp.com",
  // projectId: "fir-test-f9e66",
  // storageBucket: "fir-test-f9e66.appspot.com",
  // messagingSenderId: "242317035352",
  // appId: "1:242317035352:web:cd8d0d19b6d65c1c84072d",
  // measurementId: "G-NPT0WWJ81B"

  apiKey: "AIzaSyAwtt3bn_YeFcnSAqxaMGiDXHsBGV3GFec",
  authDomain: "yenreach-49357.firebaseapp.com",
  projectId: "yenreach-49357",
  storageBucket: "yenreach-49357.appspot.com",
  messagingSenderId: "910277699176",
  appId: "1:910277699176:web:47cbf3e8cba565e058fddd",
  measurementId: "G-ZPNG3YYY5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export default storage;