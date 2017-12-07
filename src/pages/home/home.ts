import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { MenuPage } from '../menu/menu';
import { RegisterPage } from '../register/register';
import { ToastController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { ReceiptPage } from '../receipt/receipt';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: BarcodeScannerOptions;
  enterShopQR: '';
  scannedShop: '';

  constructor(public navCtrl: NavController,
              private barcodeScanner: BarcodeScanner,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private vibration: Vibration,
              private screenOrientation: ScreenOrientation,
              private nativeStorage: NativeStorage) {

    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.nativeStorage.getItem('scannedShop')
      .then(data => this.scannedShop = data, error => console.error(error));
    if (this.scannedShop = '') {

    } else {
      this.navCtrl.setRoot(MenuPage);
    }

  }

  async scanBarcode() {
    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      // alert(barcodeData.text);
      if (barcodeData.text === '8719323938014') {
        this.nativeStorage.setItem('scannedShop', {scannedShop: barcodeData.text})
          .then();
        this.navCtrl.setRoot(MenuPage);
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
    this.navCtrl.setRoot(MenuPage);
  }

  goToReceipt() {
    this.navCtrl.push(ReceiptPage);
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
              this.navCtrl.push(RegisterPage);
            } else {
              console.log('Wrong Password');
              // toast begin
                this.toastCtrl.create({
                  message: 'Wrong password',
                  duration: 3000,
                  position: 'top'
                }).present();
              this.vibration.vibrate(1000);
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


