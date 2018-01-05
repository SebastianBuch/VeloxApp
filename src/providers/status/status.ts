import { Injectable } from '@angular/core';
import { qrID } from '../../models/qr-id';
import { AmountOfProducts } from '../../models/amount';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class StatusProvider {

  qrList: any[];
  result: boolean;

  constructor(private afDB: AngularFireDatabase) {

    this.afDB.list('qrList').valueChanges().subscribe(qrList => {
      this.qrList = qrList;
    });

  }

  saveQRtoDB(data:qrID) {
      const itemsRef = this.afDB.list<qrID>('/qrList/');
      itemsRef.push(data);
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
      observable.next(/*this.amountList[2]*/);
      observable.complete();
    });
  }
}
