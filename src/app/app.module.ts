import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
// import { ProductListComponent } from './product/product-list/product-list.component';
// import { ProductDetailComponent } from './product/product-detail/product-detail.component';
// import { ProductComponent } from './product/product.component';
// --> product.module.ts
// import { StockDetailComponent } from './stock/stock-detail/stock-detail.component';
// import { StockSummaryComponent } from './stock/stock-summary/stock-summary.component';
// import { StockComponent } from './stock/stock.component';
// --> stock.module.ts

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // StockDetailComponent, --> stock.module.ts
    // StockSummaryComponent, --> stock.module.ts
    // StockComponent,
    // ProductListComponent, --> product.module.ts
    // ProductDetailComponent, --> product.module.ts
    // ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
