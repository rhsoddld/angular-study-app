import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-listing/product-listing.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductService } from './shared/product.service';
import { HttpClientModule } from '@angular/common/http';    // http req, res for api (https://angular.jp/guide/http)


const routes: Routes = [
  { 
    path: 'products', component: ProductComponent, 
    children: [
    { path: '', component: ProductListComponent },
    { path: ':productId', component: ProductDetailComponent },
    ]
  },
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ],

  // service definition
  providers: [
    ProductService  // <<--- shared/product.service.ts
  ],    
  bootstrap: []
})
export class ProductModule { }
