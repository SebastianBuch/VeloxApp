import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { ToastController } from 'ionic-angular';
import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { ProductData } from '../../models/products';

@Component({
  selector: 'page-scanprompt',
  templateUrl: 'scanprompt.html',
})
export class ScanpromptPage {

  productData = '';
  productAmount = '';

  findProductData: ProductData;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private nativeStorage: NativeStorage,
              private barcodeScanner: BarcodeScanner,
              private toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              private productService: ProductServiceProvider) {

    this.nativeStorage.getItem('scannedResult')
      .then(data => this.productData = data, error => console.error(error));
      /*.then(data => productService.findProductData(data).subscribe(productInfo => {
        this.findProductData = productInfo;
      }), error => console.error(error));*/

    productService.findProductData().subscribe(productInfo => {
      this.findProductData = productInfo;
    });
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
