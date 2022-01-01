import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ProductDetailComponent } from './product/product-detail/product-detail.component';
// import { ProductListComponent } from './product/product-listing/product-listing.component';
// --> import ProductModule
import { ProductModule } from './product/product.module';
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './register/register.component';
// --> import AuthModule
import { AuthModule } from './auth/auth.module';
//import { StockListComponent } from './stock/stock-summary/stock-summary.component';
// --> import StockModule
import { StockModule } from './stock/stock.module';

const routes: Routes = [
    { path: "", redirectTo: "products", pathMatch: "full" },
    { path: "stocks", redirectTo: "stocks", pathMatch: "full" },
    // { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },
    //   { path: 'stock', component: StockListComponent },
    //   { path: '', component: ProductListComponent },
    //   { path: 'detail', component: ProductDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule,
    AuthModule,
    StockModule,
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
