import { Component, OnInit } from '@angular/core';
import { StockService } from '../shared/stock.service';
// import { stocks } from '../stocks';


@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})

export class StockListComponent implements OnInit {

  stocks: any
  
  constructor(
    private stockService: StockService) { }
  
  ngOnInit() {
    // this.stocks = stocks

    const stockObservable = this.stockService.getStocks();
    stockObservable.subscribe(
      (data) => { 
        this.stocks = data
        console.log('OK!'); 
      },
      (err) => { 
        console.error('something wrong!!')
      },
      () => { 
        console.log('done'); 
      }
    )
  }
}

