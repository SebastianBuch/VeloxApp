import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { qrID } from '../../models/qr-id';
import { AmountOfProducts } from '../../models/amount';

@Injectable()
export class StatusProvider {

  qrList: qrID[];
  amountList: AmountOfProducts[];

  constructor(public http: HttpClient) {
    console.log('Hello StatusProvider Provider');
    this.qrList = [
      {
        qr: 'netto15-2018-01-13'
      },
      {
        qr: 'netto10-2018-01-16'
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

  saveQRtoDB(data:string) {
    alert(data);
  }

}
