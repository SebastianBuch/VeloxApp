import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { MenuPage } from '../menu/menu';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-splashscreen',
  templateUrl: 'splashscreen.html',
})
export class SplashscreenPage {

  scannedShop: '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private nativeStorage: NativeStorage) {

      this.nativeStorage.getItem('scannedShopone')
        .then(data => { if (data.scannedShop != '') {
          this.navCtrl.setRoot(MenuPage).then();
        } else {
          this.navCtrl.setRoot(HomePage).then();
        }}, error => console.error(error));

  }

  goToLandingPage() {
    this.navCtrl.setRoot(HomePage);
  }

}
