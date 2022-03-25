import { Injectable } from '@angular/core';
import { product } from '../models/product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products: product[] = [
    new product(1, 'Honda Future', 35000000, true),
    new product(2, 'Honda Blade', 30000000, false),
    new product(3, 'Yamaha Sirius', 28000000, true)
  ];

  constructor() { }

  showProducts() {
    return this.products;
  }

  getProductById(id : number) {
    let productById;
    for (let i = 0; i < this.products.length; i++) {
        if(id === this.products[i].id){
          productById = this.products[i];
          break;
        }
      }
      return productById;
  }

}
