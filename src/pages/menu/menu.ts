import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import {HomePage} from '../home/home';
import {StatsPage} from '../stats/stats';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private barcodeScanner: BarcodeScanner) {
  }

  async scanBarcode() {
    const results = await this.barcodeScanner.scan();
    console.log(results);
  }

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
