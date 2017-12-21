import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AvgPage } from '../pages/avg/avg';
import { MaterialsPage } from '../pages/materials/materials';
import { PlansPage } from '../pages/plans/plans';
import { EmailsPage } from '../pages/emails/emails';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
//import * as firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyBwjWy4flc3fuGI_OvQt7Z4sy3HlfYOMa0",
    authDomain: "ionic3db-60cd0.firebaseapp.com",
    databaseURL: "https://ionic3db-60cd0.firebaseio.com",
    projectId: "ionic3db-60cd0",
    storageBucket: "ionic3db-60cd0.appspot.com",
    messagingSenderId: "223005323454"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AvgPage,
    MaterialsPage,
    PlansPage,
    EmailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AvgPage,
    MaterialsPage,
    PlansPage,
    EmailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
