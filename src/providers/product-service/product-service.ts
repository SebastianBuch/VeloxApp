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

  findProductBarcode(scannedBarcode) {
    let productFound = this.products.find(p => p.barcodeID === scannedBarcode);
    if (productFound) {
      let productID = productFound.barcodeID;
      let productName = productFound.productName;
      return productName;
    }
  }

}
