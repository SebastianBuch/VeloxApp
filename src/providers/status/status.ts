import { Injectable } from '@angular/core';
import { qrID } from '../../models/qr-id';
import { AmountOfProducts } from '../../models/amount';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class StatusProvider {

  qrList: any[];
  amountList: AmountOfProducts[];
  result: boolean;

  constructor(private afDB: AngularFireDatabase) {

    this.afDB.list('qrList').valueChanges().subscribe(qrList => {
      this.qrList = qrList;
      console.log(this.qrList);
    });


    /*this.qrList = [
      {
        fullqr: 'netto-500-2018-03-10'
      },
      {
        fullqr: 'fakta-12-2019-01-10'
      },
      {
        fullqr: 'netto-64-2018-03-10'
      }
    ];*/

    this.amountList = [
      {
        qrID: 'netto15-2018-01-13',
        barcode: '534345435345',
        amount: '34',
      },
      {
        qrID: 'netto10-2018-01-16',
        barcode: '534345435345',
        amount: '56',
      },
    ]
  }

  saveQRtoDB(data:qrID) {
      const itemsRef = this.afDB.list<qrID>('/qrList/');
      itemsRef.push(data);
      //this.qrList.push(data);
  }

  checkScan(scannedCode:string): boolean {
    for (let qrCode of this.qrList) {
      if (qrCode.fullqr == scannedCode) {
        this.result = true;
        break;
      } else {
        this.result = false;
      }
      }
      return this.result;
    }

  saveAmountToDB(data:AmountOfProducts): Observable<AmountOfProducts> {
    return Observable.create(observable => {
      const itemsRef = this.afDB.list<AmountOfProducts>('/amountList/');
      itemsRef.push(data);
      //this.amountList.push(data);
      observable.next(this.amountList[2]);
      observable.complete();
    });
  }
}
