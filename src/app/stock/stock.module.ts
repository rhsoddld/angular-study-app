import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';

const routes: Routes = [
    { 
        path: 'stocks', component: StockComponent,
        children: [ 
            { path: '', component: StockListComponent },
            { path: ':stockId', component: StockDetailComponent },
        ]
    },
];

@NgModule({
    declarations: [
        StockComponent,
        StockListComponent,
        StockDetailComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    providers: [],
    bootstrap: []
})

export class StockModule { }