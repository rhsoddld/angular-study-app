import { Component, OnInit } from '@angular/core';
// import { products } from '../../products';
import { ProductService } from '../shared/product.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListComponent implements OnInit {

  // products:any = [1,2,3,4]

  products:any
  
  constructor(private productService: ProductService) { }

  ngOnInit() {      // initialize (first call)
    // this.products = products
    // this.products = this.productService.getProducts();

    const productObservable = this.productService.getProducts();
    productObservable.subscribe(
      (data) => { 
        // console.log('got value ' + data);
        this.products = data
      },
      (err) => { console.error('something wrong occurred: ' + err);},
      () => { console.log('done'); }
    )

    // // observable (https://rxjs.dev/guide/observable)
    // const observable = new Observable(subscriber => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 3000);
    // });

    // // debugger
    // console.log('just before subscribe');
    // // debugger
    // observable.subscribe({
    //   next(data) { console.log('got value ' + data); },
    //   error(err) { console.error('something wrong occurred: ' + err); },
    //   complete() { console.log('done'); }
    // });
    // console.log('just after subscribe');

  }

}
