import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ProductDetailComponent } from './product/product-detail/product-detail.component';
// import { ProductListComponent } from './product/product-listing/product-listing.component';
// --> import ProductModule
import { ProductModule } from './product/product.module';
//import { StockListComponent } from './stock/stock-summary/stock-summary.component';
// --> import StockModule
import { StockModule } from './stock/stock.module';

const routes: Routes = [
    { path: "", redirectTo: "products", pathMatch: "full" },
    { path: "stocks", redirectTo: "stocks", pathMatch: "full" },
//   { path: 'stock', component: StockListComponent },
//   { path: '', component: ProductListComponent },
//   { path: 'detail', component: ProductDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule,
    StockModule,
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
