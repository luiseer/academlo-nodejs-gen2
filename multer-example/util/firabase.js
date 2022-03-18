const { initializeApp } = require('firebase/app')
const dotenv = require('dotenv')
const { getStorage } = require('firebase/storage')

dotenv.config({path: './config'})

const firebaseConfig = {

    apiKey: process.env.FIREBASE_API_KEY,
  
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  
    projectId: process.env.FIREBASE_PROJECT_ID,
  
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  
    messagingSenderId: process.env.FIREBASE_MESSAGE,
  
    appId: process.env.FIREBASE_APP_ID,
  
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  
  };

const firebaseApp = initializeApp(firebaseConfig)
const storage = getStorage(firebaseApp)

module.exports = { storage }