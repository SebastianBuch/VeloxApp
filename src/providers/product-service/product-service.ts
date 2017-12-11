import { Injectable } from '@angular/core';
import { ProductData} from '../../models/products';
import {Observable} from 'rxjs/Observable';
import {observable} from 'rxjs/symbol/observable';

@Injectable()
export class ProductServiceProvider {

  products: ProductData[];

  constructor() {
    this.products = [
      {
        barcodeID: '5701098025269',
        productName: 'Brillerens'
      },
      {
        barcodeID: '8719323928014',
        productName: 'Sko'
      }
    ];
  }

  findProductData(barcode) :Observable<ProductData> {
    return Observable.create(observable => {
    let productFound = this.products.find(p => p.barcodeID === barcode);
    if (productFound) {
      observable.next(productFound);
      observable.complete();
    }
    /*let productInfo = 0;
    return Observable.create(observable => {
      observable.next(this.products[productInfo]alert(barcode));
      observable.complete();
    })*/
  });
  }










}
