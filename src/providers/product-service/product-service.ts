import { Injectable } from '@angular/core';
import { ProductData} from '../../models/products';
import {Observable} from 'rxjs/Observable';
import {observable} from 'rxjs/symbol/observable';
import { Storage } from '@ionic/storage';

@Injectable()
export class ProductServiceProvider {

  products: ProductData[];

  constructor(private storage: Storage) {
    /*this.products = [
      {
        barcodeID: '5701098025269',
        productName: 'Brillerens'
      },
      {
        barcodeID: '8719323928014',
        productName: 'Sko'
      }
    ];*/
  }

  getAllProducts() :Observable<ProductData[]> {
    return Observable.create(observable => {
      this.storage.get('products').then(products => {
        if (!products) {
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
          this.storage.set('products', products);
        }
        observable.next(products);
        observable.complete()
      });
    });
  }

  findProductData(products: ProductData) :Observable<ProductData> {
    return Observable.create(observable => {
      this.getAllProducts().subscribe(allProducts => {
        let productFound = allProducts.find(p => p.barcodeID === products.barcodeID);
          observable.next(this.products.indexOf(productFound));
          observable.complete();
      })
    })



    /*return Observable.create(observable => {
    let productFound = this.products.find(p => p.barcodeID === barcode);
    if (productFound) {
      observable.next(productFound);
      observable.complete();
    }
    let productInfo = 0;
    return Observable.create(observable => {
      observable.next(this.products[productInfo]alert(barcode));
      observable.complete();
    })
  });*/
  }










}
