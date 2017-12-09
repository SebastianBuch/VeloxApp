import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { MenuPage } from '../menu/menu';
import { RegisterShop } from '../../models/registerShop';
import { ShopServiceProvider } from '../../providers/shop-service/shop-service';

@Component({
  selector: 'page-receipt',
  templateUrl: 'receipt.html',
})
export class ReceiptPage {

  receiptData = '';
  registerData: RegisterShop;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private nativeStorage: NativeStorage,
              private shopService: ShopServiceProvider) {

    this.nativeStorage.getItem('QRnativeData')
      .then(
        data => this.receiptData = data,
        error => console.error(error)
      );

    this.registerData = shopService.checkForShop();
  }

  goToMenu(){
    this.navCtrl.setRoot(MenuPage);
  }

  sendMail() {

  }

}
