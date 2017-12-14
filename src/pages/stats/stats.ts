import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
    this.resetstat1(30);
    this.resetstat2(150);
    this.resetstat3(573);
  }

  resetstat1(count:number){
    let interval = setInterval(()=>{
      this.stat1++;
      if(this.stat1 == count) clearInterval(interval);
    },1);
  }

  resetstat2(count:number){
    let interval = setInterval(()=>{
      this.stat2++;
      if(this.stat2 == count) clearInterval(interval);
    },1);
  }

  resetstat3(count:number){
    let interval = setInterval(()=>{
      this.stat3++;
      if(this.stat3 == count) clearInterval(interval);
    },1);
  }

}
