import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Receive Param from route
import { stocks } from '../stocks';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {

  stock: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.stock = stocks[+params.get("stockId")!]
    })
  }

}
