import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplashscreenPage } from '../pages/splashscreen/splashscreen';
import { AlertController, NavController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { NativeStorage } from "@ionic-native/native-storage";
import { MenuPage } from '../pages/menu/menu';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public screenOrientation: ScreenOrientation,
              private nativeStorage: NativeStorage,
              public navCtrl: NavController) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT).then();

      this.nativeStorage.getItem('scannedShopone')
        .then(data => { if (data.scannedShop != '') {
          this.navCtrl.setRoot(MenuPage).then();
        }}, error => console.error(error));
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

