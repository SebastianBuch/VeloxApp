import { Injectable } from '@angular/core';
import { qrID } from '../../models/qr-id';
import { AmountOfProducts } from '../../models/amount';
import { Observable } from 'rxjs/Observable';
import {observable} from 'rxjs/symbol/observable';

@Injectable()
export class StatusProvider {

  qrList: qrID[];
  amountList: AmountOfProducts[];
  result: boolean;

  constructor() {
    this.qrList = [
      {
        fullqr: 'netto-500-2018-03-10'
      },
      {
        fullqr: 'fakta-12-2019-01-10'
      },
      {
        fullqr: 'netto-64-2018-03-10'
      }
    ];

    this.amountList = [
      {
        qrID: 'netto15-2018-01-13',
        barcode: '534345435345',
        amount: 34,
      },
      {
        qrID: 'netto10-2018-01-16',
        barcode: '534345435345',
        amount: 56,
      },
    ]
  }

  saveQRtoDB(data:qrID): Observable<qrID> {
    return Observable.create(observable => {
      this.qrList.push(data);
      observable.next(console.log(this.qrList));
      observable.complete();
    });
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
      alert(data);
      observable.next();
      observable.complete();
    });
  }
}
