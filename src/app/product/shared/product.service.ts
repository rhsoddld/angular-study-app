import { Injectable } from "@angular/core";
import { products } from "src/app/products";
import { HttpClient } from "@angular/common/http";  
import { Observable } from 'rxjs';

// (angular rule)when use it as a service
@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts(): Observable<any> {
        // return products
        // return this.http.get('http://localhost:3001/api/v1/products')
        return this.http.get('/api/v1/products')
    }

    getProductById(productId: string): Observable<any> {
        // return products[productId]
        // debugger
        return this.http.get('/api/v1/products/' + productId)
    }
}