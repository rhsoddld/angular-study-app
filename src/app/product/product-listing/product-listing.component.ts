import { Component, OnInit } from '@angular/core';
import { products } from '../../products';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListComponent implements OnInit {

  // products:any = [1,2,3,4]

  products:any
  
  constructor() { }

  ngOnInit(): void {
    this.products = products
  }

}
