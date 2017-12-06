import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScanpromptPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-scanprompt',
  templateUrl: 'scanprompt.html',
})
export class ScanpromptPage {

  productAmount = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  saveAmount() {

  }


}
