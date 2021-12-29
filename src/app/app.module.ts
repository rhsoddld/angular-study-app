import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
// import { ProductListComponent } from './product/product-list/product-list.component';
// import { ProductDetailComponent } from './product/product-detail/product-detail.component';
// --> product.module.ts
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
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
