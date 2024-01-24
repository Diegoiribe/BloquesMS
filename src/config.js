// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDqHoaMRwj0ogg-g30GcTWfyOVMj507c7c',
  authDomain: 'api-bloquesms-f36d7.firebaseapp.com',
  projectId: 'api-bloquesms-f36d7',
  storageBucket: 'api-bloquesms-f36d7.appspot.com',
  messagingSenderId: '300209082077',
  appId: '1:300209082077:web:6dfe5f4a12597c235c1534'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
