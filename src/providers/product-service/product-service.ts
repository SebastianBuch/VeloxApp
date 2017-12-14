import { Injectable } from '@angular/core';
import { ProductData } from '../../models/products';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

@Injectable()
export class ProductServiceProvider {

  products: ProductData[];
  scannedBarcode: string;

  constructor(private storage: Storage) {
    this.products = [
      {
        barcodeID: '8719323938014',
        productName: 'Sko'
      },
      {
        barcodeID: '5701098025269',
        productName: 'Brillerens'
      }
    ];
  }

  saveBarcode(barcode) {
    this.scannedBarcode = barcode;
  }

  findProductData(barcode): Observable<ProductData> {
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
