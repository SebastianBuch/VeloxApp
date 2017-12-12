import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { MenuPage } from '../menu/menu';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-receipt',
  templateUrl: 'receipt.html',
})
export class ReceiptPage {

  receiptData = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private nativeStorage: NativeStorage,
              private storage: Storage) {

    this.nativeStorage.getItem('QRnativeData')
      .then(
        data => this.receiptData = data,
        error => console.error(error)
      );
  }

  goToMenu(){
    this.navCtrl.setRoot(MenuPage);
  }

  sendMail() {

  }

}
