import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../shared/stock.service';
// Receive Param from route
import { stocks } from '../stocks';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {

  stock: any;

  constructor(
    private route: ActivatedRoute,
    private stockService: StockService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // this.stock = stocks[+params.get("stockId")!]
      const stockObservable = this.stockService.getStockById(params.get('stockId')!)
      stockObservable.subscribe(
        (data) => {
          this.stock = data
        },
        (err) => {
          console.log(err)
        }
      )
    })
  }
}
