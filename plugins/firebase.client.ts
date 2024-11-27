import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey,
    authDomain: config.public.firebaseAuthDomain,
    projectId: config.public.firebaseProjectId,
    storageBucket: config.public.firebaseStorageBucket,
    messagingSenderId: config.public.firebaseMessagingSenderId,
    appId: config.public.firebaseAppId,
    measurementId: "G-KYEV6WW3GJ"
  };

  // Initialize Firebase App
  const app = initializeApp(firebaseConfig);

  // Initialize Firestore and Storage
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  // Provide Firebase services globally in your app
  nuxtApp.provide('firestore', firestore);
  nuxtApp.provide('storage', storage);
});
