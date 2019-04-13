import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

firebase.initializeApp({
    apiKey: "AIzaSyCNtF-ruldGLGeTw0bc_WTt4KnPvwY7ArA",
    authDomain: "starfish-b94dd.firebaseapp.com",
    databaseURL: "https://starfish-b94dd.firebaseio.com",
    projectId: "starfish-b94dd",
    storageBucket: "starfish-b94dd.appspot.com",
    messagingSenderId: "664300399306"
});

