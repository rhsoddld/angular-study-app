import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-listing/product-listing.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductService } from './shared/product.service';
import { AuthGuard } from '../auth/shared/auth.guard';
import { ProductTmpComponent } from './product-tmp/product-tmp.component';


const routes: Routes = [
  { 
    path: 'products', component: ProductComponent, 
    children: [
    { path: '', component: ProductListComponent },
    { path: ':productId', component: ProductDetailComponent, canActivate: [AuthGuard]},
    { path: 'tmp/:productId', component: ProductTmpComponent },
    ]
  },
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductTmpComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],

  // service definition
  providers: [
    ProductService  // <<--- shared/product.service.ts
  ],    
  bootstrap: []
})
export class ProductModule { }
