import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AvgPage } from '../pages/avg/avg';
import { MaterialsPage } from '../pages/materials/materials';
import { PlansPage } from '../pages/plans/plans';
import { EmailsPage } from '../pages/emails/emails';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon:any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: ' الرئيسية - المنشورات', component: HomePage, icon:"home" },
      { title: 'حساب المعدل', component: AvgPage, icon:"calculator" },
      { title: 'تحميل المواد', component: MaterialsPage, icon:"download" },
      { title: 'الخطط الدراسية', component: PlansPage, icon:"basket" },
      { title: 'إيميلات المدرسين', component: EmailsPage, icon:"mail" }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
