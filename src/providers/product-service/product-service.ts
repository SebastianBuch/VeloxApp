import { Injectable } from '@angular/core';
import { ProductData} from '../../models/products';
import {Observable} from 'rxjs/Observable';
import {observable} from 'rxjs/symbol/observable';
import { Storage } from '@ionic/storage';

@Injectable()
export class ProductServiceProvider {

  products: ProductData[];

  constructor(private storage: Storage) {
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

  findProductData(): Observable<ProductData> {
    let productInfo = 0;
    return Observable.create(observable => {
      observable.next(this.products[productInfo]);
      observable.complete();
    });
  }

  findProductData2(barcode): Observable<ProductData> {
    return Observable.create(observable => {
      this.products.forEach((item, index) => {
        if (item.barcodeID == barcode) {
          observable.next(this.products[index]);
          observable.complete();
        }
      });
    });
  }
}
