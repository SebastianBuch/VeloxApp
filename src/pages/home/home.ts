import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { MenuPage } from '../menu/menu';
import { RegisterPage } from '../register/register';
import { ToastController } from 'ionic-angular';
import { ReceiptPage } from '../receipt/receipt';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { NativeStorage } from '@ionic-native/native-storage';
import { StatusProvider } from '../../providers/status/status';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: BarcodeScannerOptions;
  enterShopQR: '';
  scannedShop: '';
  test: boolean = false;

  constructor(public navCtrl: NavController,
              private barcodeScanner: BarcodeScanner,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private screenOrientation: ScreenOrientation,
              private nativeStorage: NativeStorage,
              private statusService: StatusProvider) {

    this.nativeStorage.getItem('scannedShopone')
      .then(data => { if (data.scannedShop != '') {
        this.navCtrl.setRoot(MenuPage).then();
    }}, /*error => alert(error)*/);

  }

  async scanBarcode() {
    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      this.statusService.checkScan(barcodeData.text);
      if ( this.statusService.checkScan(barcodeData.text) == true /*Check through array if status data exists*/ ) {
        this.nativeStorage.setItem('scannedShopone', {scannedShop: barcodeData.text})
          .then();
        this.navCtrl.setRoot(MenuPage).then();
      } else {
        this.toastCtrl.create({
          message: 'Invalid QR code',
          duration: 3000,
          position: 'top'
        }).present();
      }
    }, (err) => {
      // An error occurred
    });
  }

  goToMenu(){
    this.navCtrl.setRoot(MenuPage).then();
  }

  goToReceipt() {
    this.navCtrl.push(ReceiptPage).then();
  }

  registerShopPage() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: data => {
            if (data.password === "ok") {
              this.navCtrl.push(RegisterPage).then();
            } else {
              console.log('Wrong Password');
              // toast begin
                this.toastCtrl.create({
                  message: 'Wrong password',
                  duration: 3000,
                  position: 'top'
                }).present();
              // toast end
              return false;
            }
          }
        }
      ]
    });
    alert.present();
  }

}


