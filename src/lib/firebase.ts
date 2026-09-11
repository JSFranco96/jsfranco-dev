import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
};

let appCheckInitialized = false;

function getFirebaseApp(): FirebaseApp {
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

  // Gate direct Firestore access to requests coming from this app running on
  // an allowed domain — without this, anyone can copy firebaseConfig (it's
  // public by design) and write to Firestore straight from a script.
  const recaptchaSiteKey = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY;
  if (!appCheckInitialized && recaptchaSiteKey) {
    initializeAppCheck(app, {
      provider: new ReCaptchaEnterpriseProvider(recaptchaSiteKey),
      isTokenAutoRefreshEnabled: true,
    });
    appCheckInitialized = true;
  }

  return app;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  lang: 'es' | 'en';
}

export async function submitContactMessage(data: ContactMessage) {
  const db = getFirestore(getFirebaseApp());
  await addDoc(collection(db, 'messages'), {
    ...data,
    createdAt: serverTimestamp(),
  });
}
