import { Injectable } from '@angular/core';
import { ProductData } from '../../models/products';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductServiceProvider {

  products: any[];
  scannedBarcode: string;

  constructor(private afDB: AngularFireDatabase) {

    //const itemsRef = afDB.list('products');
    //itemsRef.push({barcodeID: '0705632085943', productName: 'Kage'});

    this.afDB.list('products').valueChanges().subscribe(products => {
      this.products = products;
      console.log(this.products);
    });

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
