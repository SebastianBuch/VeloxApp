import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import {MenuPage} from '../menu/menu';
import {RegisterPage} from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: BarcodeScannerOptions;

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, private alertCtrl: AlertController) {

  }

  async scanBarcode() {
    const results = await this.barcodeScanner.scan();
    console.log(results);
  }

  goToMenu(){
    this.navCtrl.setRoot(MenuPage);
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
              // invalid login
              return false;
            }
          }
        }
      ]
    });
    alert.present();
  }

}


