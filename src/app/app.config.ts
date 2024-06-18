import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"teklearn-d0628","appId":"1:867033331074:web:f1a51165b4230a80884b9b","databaseURL":"https://teklearn-d0628-default-rtdb.asia-southeast1.firebasedatabase.app","storageBucket":"teklearn-d0628.appspot.com","apiKey":"AIzaSyAPhOKkc05bMi57-IebkaNnFDc-0CBzd7I","authDomain":"teklearn-d0628.firebaseapp.com","messagingSenderId":"867033331074"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideAnimationsAsync()]
};
