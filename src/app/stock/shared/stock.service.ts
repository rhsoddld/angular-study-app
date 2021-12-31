import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class StockService {

    constructor(private http: HttpClient) { }

    getStocks(): Observable<any> {
        debugger
        return this.http.get('/api/v1/stocks')
    }

    getStockById(stockId: string): Observable<any> {
        return this.http.get('/api/v1/stocks/' + stockId)
    }
 }