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

  findProductData(barcode) {
    alert(barcode);
    /*let item73 = this.products.filter(function(item) {
      return item.barcodeID === barcode;
    })[0];*/
    //return this.products[0];
    //let pdata = this.products.filter('filter')(this.products, {'barcodeID':barcode})
  }

}
