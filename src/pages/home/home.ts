import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: BarcodeScannerOptions;

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {

  }

  async scanBarcode() {
    const results = await this.barcodeScanner.scan();
    console.log(results);
  }

}


