import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplashscreenPage } from '../pages/splashscreen/splashscreen';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { AuthProvider } from '../providers/auth/auth';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private auth: AuthProvider,
              private nativeStorage: NativeStorage) {
    /*platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });*/

    this.auth.check().then((isChecking) => {
      if (isChecking) {
        this.nativeStorage.getItem('scannedShopone')
          .then(data => {
            if (data.scannedShop != '') {
              this.rootPage(MenuPage);
            }
          });
      } else {
        this.rootPage(HomePage);
      }
    });
  }
}

