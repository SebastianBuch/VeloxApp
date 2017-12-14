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

    this.nativeStorage.getItem('scannedShopone').then(data => this.scannedShop = data.scannedShopLocal, error => console.error(error));

    productService.findProductData(this.productService.scannedBarcode).subscribe(productInfo => {
      this.findProductData = productInfo;
    });
  }

  confirmAmount() {
    this.qrID = this.scannedShop;
    alert(this.scannedShop);
    this.barcode = this.productService.scannedBarcode;
    this.amount = this.productAmount;

    this.statusService.saveAmountToDB({qrID: this.qrID, barcode: this.barcode, amount: this.amount}).subscribe(amount => {
      /*alert(amount.qrID);
      alert(amount.barcode);
      alert(amount.amount);*/
    });

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
      this.productService.saveBarcode(barcodeData.text.toString());
      console.log(barcodeData.text);
      this.navCtrl.push(ScanpromptPage);
    }, (err) => {
      // An error occurred
    });
  }

}
