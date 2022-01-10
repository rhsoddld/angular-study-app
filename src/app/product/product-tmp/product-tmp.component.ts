import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-tmp',
  templateUrl: './product-tmp.component.html',
  styleUrls: ['./product-tmp.component.css']
})
export class ProductTmpComponent implements OnInit {

  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productObservable = this.productService.getProductById(params.get('productId')!)
      
      productObservable.subscribe(
        (data) => { 
          this.product = data
          console.log(this.product)
        },
        (err) => {
          console.log(err)
        }

      )
    })
  }

}
