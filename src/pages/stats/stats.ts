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

  stat1: number;
  stat2: number;
  stat3: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.stat1 = 0;
    this.stat2 = 0;
    this.stat3 = 0;
    this.reset();
  }

  reset() {
    this.resetstat1();
    this.resetstat2();
    this.resetstat3();
  }

  resetstat1(){
    let interval = setInterval(()=>{
      this.stat1++;
      if(this.stat1 == 30) clearInterval(interval);
    },10);
  }

  resetstat2(){
    let interval = setInterval(()=>{
      this.stat2++;
      if(this.stat2 == 430) clearInterval(interval);
    },10);
  }

  resetstat3(){
    let interval = setInterval(()=>{
      this.stat3++;
      if(this.stat3 == 1430) clearInterval(interval);
    },10);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatsPage');
  }

}
