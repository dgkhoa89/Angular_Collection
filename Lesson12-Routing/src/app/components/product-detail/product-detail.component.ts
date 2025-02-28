import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/models/product.class';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product :any ;

  constructor(
    public activatedRoute : ActivatedRoute,
    public productService : ProductService
  ) { }

  ngOnInit(): void {
    // this.handleBySnapshot();
    this.handleByParams();
  }

  handleBySnapshot(){
    let id = (+this.activatedRoute.snapshot.params['id']);
    let productById = this.productService.getProductById(id);
    this.product = productById;
  }

  handleByParams(){
    this.activatedRoute.params.subscribe(data=>{
      let id = +data['id'];
      this.product = this.productService.getProductById(id);
    })
  }
}
