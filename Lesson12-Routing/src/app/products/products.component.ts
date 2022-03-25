import { Component, OnInit } from '@angular/core';
import { product } from '../models/product.class';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: product[]=[];

  constructor(
    public productService : ProductService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.showProducts();
  }

}
