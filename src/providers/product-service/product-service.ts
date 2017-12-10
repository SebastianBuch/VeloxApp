import { Injectable } from '@angular/core';
import { ProductData} from '../../models/products';

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

  /*findProductData(barcode) {
    return this.products[];
    //let pdata = this.products.filter('filter')(this.products, {'barcodeID':barcode})
  }*/

}
