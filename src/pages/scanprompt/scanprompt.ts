import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { ToastController } from 'ionic-angular';
import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { ProductData } from '../../models/products';
import { Storage } from '@ionic/storage';
import { StatusProvider } from '../../providers/status/status';
import {observable} from 'rxjs/symbol/observable';

@Component({
  selector: 'page-scanprompt',
  templateUrl: 'scanprompt.html',
})
export class ScanpromptPage {

  productData = '';
  productAmount = '';
  scannedShop = '';

  qrID: string;
  barcode: string;
  amount: string;

  findProductData: ProductData;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private nativeStorage: NativeStorage,
              private barcodeScanner: BarcodeScanner,
              private toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              private productService: ProductServiceProvider,
              private statusService: StatusProvider,
              private storage: Storage) {

    this.nativeStorage.getItem('scannedResult')
      .then(data => this.productData = data, error => console.error(error));

    productService.findProductData().subscribe(productInfo => {
      this.findProductData = productInfo;
    });
  }

  confirmAmount() {
    alert(this.productService.scannedBarcode);
    /*this.nativeStorage.getItem('scannedShopone').then(data => this.scannedShop = data, error => console.error(error))
    this.qrID = this.scannedShop;
    this.barcode = this.productData;
    this.amount = this.productAmount;

    this.statusService.saveAmountToDB({qrID: this.qrID, barcode: this.barcode, amount: this.amount});*/

    this.toastCtrl.create({
      message: this.productAmount + ' was registered',
      duration: 3000,
      position: 'top'
    }).present();
    //this.scanner();
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
