import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/*import {ReceiptPage} from '../receipt/receipt';*/
import { NativeStorage } from '@ionic-native/native-storage';

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

  qrData = '';
  qrDataID = '';
  qrDataDate = '';
  createdCode = '';
  testcode = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private nativeStorage: NativeStorage) {
  }

  /*goToReceipt(){
    this.navCtrl.push(ReceiptPage);
  }*/

  createCode() {
    this.qrData = this.qrDataID + "-" + this.qrDataDate;
    this.createdCode = this.qrData;
    this.nativeStorage.setItem('myitem', {valueone: 'value', anotherProperty: 'anotherValue'})
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
      );
    this.nativeStorage.getItem('myitem')
      .then(
        data => this.testcode = data,
        error => console.error(error)
      );
  }

}
