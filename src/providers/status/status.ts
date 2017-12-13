import { Injectable } from '@angular/core';
import { qrID } from '../../models/qr-id';
import { AmountOfProducts } from '../../models/amount';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StatusProvider {

  qrList: qrID[];
  amountList: AmountOfProducts[];

  constructor() {
    this.qrList = [
      {
        fullqr: 'netto15-2018-01-13'
      },
      {
        fullqr: 'netto10-2018-01-16'
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

}
