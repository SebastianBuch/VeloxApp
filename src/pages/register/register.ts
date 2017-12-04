import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/*import {ReceiptPage} from '../receipt/receipt';*/

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  qrData = null;
  qrDataID = null;
  qrDataDate = null;
  createdCode = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /*goToReceipt(){
    this.navCtrl.push(ReceiptPage);
  }*/

  createCode() {
    this.qrData = this.qrDataID + "-" + this.qrDataDate;
    this.createdCode = this.qrData;
  }

}
