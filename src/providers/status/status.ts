import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { qrID } from '../../models/qr-id';
import { AmountOfProducts } from '../../models/amount';

@Injectable()
export class StatusProvider {

  qrlist = qrID[];
  amountlist = AmountOfProducts[];

  constructor(public http: HttpClient) {
    console.log('Hello StatusProvider Provider');
    this.qrlist = [
      {
        qr: 'netto15-2018-01-13'
      },
      {
        qr: 'netto10-2018-01-16'
      }
    ];

    this.amountlist = [
      {
        qrid: 'netto15-2018-01-13',
        barcode: '534345435345',
        amount: 34,
      },
      {
        qrid: 'netto10-2018-01-16',
        barcode: '534345435345',
        amount: 56,
      },
    ]
  }

}
