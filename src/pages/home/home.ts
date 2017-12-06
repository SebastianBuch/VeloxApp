import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import {MenuPage} from '../menu/menu';
import {RegisterPage} from '../register/register';
import { ToastController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import {ReceiptPage} from '../receipt/receipt';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: BarcodeScannerOptions;
  scanResult;

  constructor(public navCtrl: NavController,
              private barcodeScanner: BarcodeScanner,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private vibration: Vibration) {

  }

  async scanBarcode() {
    this.scanResult = await this.barcodeScanner.scan();
    if ( this.scanResult ) {
      alert(this.scanResult);
      //this.navCtrl.setRoot(MenuPage);
    }
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


