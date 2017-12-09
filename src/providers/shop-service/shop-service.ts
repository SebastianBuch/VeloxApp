import { Injectable } from '@angular/core';
import { RegisterShop } from '../../models/registerShop';

@Injectable()
export class ShopServiceProvider {

  shops: RegisterShop[];

  constructor() {
    this.shops = [
      {
        qrID: 'Netto13-2017-12-24',
        shopID: 'Netto13',
        statusDate: [
          '2017-12-24',
          '2018-01-20'
        ]
      },
      {
        qrID: 'Netto16-2017-12-23',
        shopID: 'Netto16',
        statusDate: [
          '2017-12-23',
          '2018-01-20'
        ]
      },
      {
        qrID: 'Netto21-2017-12-25',
        shopID: 'Netto21',
        statusDate: [
          '2017-12-25',
          '2018-01-20'
        ]
      }
    ];

  }

  checkForShop() :RegisterShop {
    return this.shops[0];
  }

}
