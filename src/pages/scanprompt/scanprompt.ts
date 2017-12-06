import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-scanprompt',
  templateUrl: 'scanprompt.html',
})
export class ScanpromptPage {

  productData = '';
  productAmount = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private nativeStorage: NativeStorage,
              private barcodeScanner: BarcodeScanner,
              private toastCtrl: ToastController) {

    this.nativeStorage.getItem('scannedResult')
      .then(data => this.productData = data, error => console.error(error));

  }

  confirmAmount() {
    // save data
    this.toastCtrl.create({
      message: this.productAmount + ' was registered',
      duration: 3000,
      position: 'top'
    }).present();
    this.scanner();
  }

  scanner() {
    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      this.nativeStorage.setItem('scannedResult', {productData: barcodeData.text})
        .then( () => console.log('Stored item!'), error => console.error('Error storing item'));
      console.log(barcodeData.text);
      this.navCtrl.push(ScanpromptPage);
    }, (err) => {
      // An error occurred
    });
  }

}
