import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: String(process.env.REACT_APP_FIREBASE_API_KEY),
  authDomain: 'boney-james-c978c.firebaseapp.com',
  projectId: 'boney-james-c978c',
  storageBucket: 'boney-james-c978c.appspot.com',
  messagingSenderId: '950740856907',
  appId: '1:950740856907:web:27644bb841e6d02a035dce',
};

const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const db = getFirestore();

export const auth = getAuth();
