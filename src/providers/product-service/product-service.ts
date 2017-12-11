import { Injectable } from '@angular/core';
import { ProductData} from '../../models/products';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductServiceProvider {

  products: ProductData[];

  constructor() {
    this.products = [
      {
        barcodeID: 5701098025269,
        productName: 'Brillerens'
      },
      {
        barcodeID: 8719323928014,
        productName: 'Sko'
      }
    ];
  }

  findProductData(/*barcode*/) :Observable<ProductData> {
    let productInfo = 0;
    return Observable.create(observable => {
      observable.next(this.products[productInfo]);
      observable.complete();
    })
  }

}
