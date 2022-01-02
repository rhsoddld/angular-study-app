import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";  
import { Observable } from 'rxjs';

// (angular rule)when use it as a service
@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }


    login(userData: any): Observable<any> {
        return this.http.post('/api/v1/users/login', userData)
    }

    register(userData: any): Observable<any> {
        return this.http.post('/api/v1/users/register', userData)
    }
}