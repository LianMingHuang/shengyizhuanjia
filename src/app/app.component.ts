import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {WelcomePage} from "../pages/welcome/welcome";
import {LocalStorageProvider} from "../providers/local-storage/local-storage";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private storage:LocalStorageProvider) {
    this.initializeApp();
    let  appCofig:any =this.storage.get('App',{
      isRun:false,
      version:'1.0.0'
    });
    console.log('sdflsdlflsflsdflsdl=',appCofig);
    if(appCofig.isRun==true){
      this.rootPage = WelcomePage;
      appCofig.isRun = false;
      this.storage.set('App',appCofig);
    }
   // else this.rootPage=HomePage;
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    console.log('initsdfsdfsdfsdfsdfsfsd');
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

