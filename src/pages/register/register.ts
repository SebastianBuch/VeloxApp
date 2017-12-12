import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReceiptPage } from '../receipt/receipt';
import { NativeStorage } from '@ionic-native/native-storage';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  qrData = '';
  qrDataID = '';
  qrDataDate = '';
  createdCode = '';
  todayDate = new Date();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private nativeStorage: NativeStorage,
              private toastCtrl: ToastController,
              private storage: Storage) {
    console.log(this.todayDate.getDate(), this.todayDate.getMonth()+1, this.todayDate.getFullYear());
  }

  createCode() {
    if (this.qrDataID === '' && this.qrDataDate === '') {

      this.createToast('Both fields needs to be filled out');

    } else if (this.qrDataID === '') {

      this.createToast('Shop ID needs to be filled out');

    } else if (this.qrDataDate === '') {

      this.createToast('You need to pick a date');

    } else {

      this.qrData = this.qrDataID + "-" + this.qrDataDate;
      this.createdCode = this.qrData;
      this.nativeStorage.setItem('QRnativeData', {
        shopIDdata: this.qrDataID,
        datadate: this.qrDataDate,
        dateAndID: this.qrData
      })
        .then(
          () => console.log('success'),
          error => console.error('Error storing item', error)
        );
      this.saveQRtoDB(this.qrData);
      this.navCtrl.push(ReceiptPage).then();
    }
  }

  createToast(message:string) {
    this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    }).present();
  }

  saveQRtoDB(data:string) {
    alert(data);
  }

}
