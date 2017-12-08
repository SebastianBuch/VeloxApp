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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private nativeStorage: NativeStorage) {

    //setTimeout(function () {
      this.nativeStorage.getItem('scannedShopone')
        .then(data => { if (data.scannedShop != '') {
          this.navCtrl.setRoot(MenuPage);
        } else {
          this.navCtrl.setRoot(HomePage);
        }}, error => console.error(error));
    //}, 3000);

  }

  /*checkIfScannedShop() {
    this.nativeStorage.getItem('scannedShopone')
      .then(data => { if (data.scannedShop != '') {
        this.navCtrl.setRoot(MenuPage);
      } else {
        this.navCtrl.setRoot(HomePage);
      }}, error => console.error(error));

  }*/

}
