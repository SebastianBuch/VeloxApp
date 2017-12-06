import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import {HomePage} from '../home/home';
import {StatsPage} from '../stats/stats';
import { ScanpromptPage } from '../scanprompt/scanprompt';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  scanResult = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private barcodeScanner: BarcodeScanner,
              private nativeStorage: NativeStorage) {
  }

  async scanBarcode() {
    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      // alert(barcodeData.text);
      this.nativeStorage.setItem('scannedResult', {productData: barcodeData.text})
        .then( () => console.log('Stored item!'), error => console.error('Error storing item'));
      console.log(barcodeData.text);
      this.navCtrl.setRoot(ScanpromptPage);
    }, (err) => {
      // An error occurred
    });
  }

  /*async scanBarcode() {
    this.scanResult = await this.barcodeScanner.scan();
    this.navCtrl.push(ScanpromptPage);
    this.nativeStorage.setItem('scannedResult', {productAmount: this.scanResult})
      .then( () => console.log('Stored item!'), error => console.error('Error storing item'));
    console.log(this.scanResult);
  }*/

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
            console.log('Buy clicked');
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
