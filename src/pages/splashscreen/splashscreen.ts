import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { MenuPage } from '../menu/menu';
import { HomePage } from '../home/home';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-splashscreen',
  templateUrl: 'splashscreen.html',
})
export class SplashscreenPage {

  splash = true;

  scannedShop: '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private nativeStorage: NativeStorage,
              private screenOrientation: ScreenOrientation) {

      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT).then();

    this.ionViewLoad();
  }

  ionViewLoad() {
    /*this.nativeStorage.getItem('scannedShopone')
      .then(data => { if (data.scannedShop != '') {
        this.navCtrl.setRoot(MenuPage).then();
      } else {
        this.navCtrl.setRoot(HomePage).then();
      }}, error => console.error(error));*/
    setTimeout(this.getNativeStorage(), 2000);
  }

  getNativeStorage() {
    this.nativeStorage.getItem('scannedShopone')
      .then(data => { if (data.scannedShop != '') {
        this.navCtrl.setRoot(MenuPage);
      }},error => console.error(error));
  }

  goToLandingPage() {
    this.navCtrl.setRoot(HomePage);
  }

}
