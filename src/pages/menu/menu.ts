import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import {HomePage} from '../home/home';
import {StatsPage} from '../stats/stats';
import { ScanpromptPage } from '../scanprompt/scanprompt';
import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  scannedShop = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private barcodeScanner: BarcodeScanner,
              private nativeStorage: NativeStorage,
              private storage: Storage) {

    this.nativeStorage.getItem('scannedShopone')
      .then(data => this.scannedShop = data, error => console.error(error));

  }

  async scanBarcode() {
    this.barcodeScanner.scan().then((barcodeData) => {
      this.nativeStorage.setItem('scannedResult', {productData: barcodeData.text.toString()})
        .then( () => console.log('Stored item!'), error => console.error('Error storing item'));
      console.log(barcodeData.text);
      this.navCtrl.push(ScanpromptPage).then();
    }, (err) => {
      // An error occurred
    });
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Are you sure?',
      message: 'You will not be able to scan products for this inventory anymore.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Disconnect',
          handler: () => {
            this.navCtrl.setRoot(HomePage);
            this.nativeStorage.remove('scannedShopone')
              .then(data => this.scannedShop = data, error => console.error(error));
          }
        }
      ]
    });
    alert.present();
  }

  goToStats() {
    this.navCtrl.push(StatsPage);
  }

}
