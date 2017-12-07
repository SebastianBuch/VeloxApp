import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {

  myCount: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myCount = 0;
    this.reset();
  }

  reset(){
    let interval = setInterval(()=>{
      this.myCount++;
      if(this.myCount == 50) clearInterval(interval);
    },100);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatsPage');
  }

}
