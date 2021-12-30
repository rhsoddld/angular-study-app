import { Component, OnInit } from '@angular/core';
import { stocks } from '../stocks';


@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})

export class StockListComponent implements OnInit {

  stocks: any
  
  constructor() { }

  ngOnInit(): void {
    this.stocks = stocks
  }
}

