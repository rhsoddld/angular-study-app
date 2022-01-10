import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";  
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt'
//https://www.npmjs.com/package/angular-jwt

import * as moment from 'moment';
import { Router } from "@angular/router";
// https://momentjs.com/

const jwt = new JwtHelperService()

class DecodedToken {
    userId: string = ''
    username: string = ''
    iat: number = 0
    exp: number = 0
}

// (angular rule)when use it as a service
@Injectable()
export class AuthService {
    private decodedToken

    constructor(
        private http: HttpClient,
        private router: Router) 
        {
        this.decodedToken = JSON.parse(JSON.stringify(localStorage.getItem('app-meta'))) || new DecodedToken
        // console.log("localstorage "+localStorage.getItem('app-meta'))
        // console.log("localstorage JSON.stringify "+JSON.stringify(localStorage.getItem('app-meta')))
        // console.log("localstorage JSON.stringify parse "+JSON.parse(JSON.stringify(localStorage.getItem('app-meta'))))
        

        // this.decodedToken = JSON.parse(JSON.stringify(localStorage.getItem('app-auth'))) || new DecodedToken
    }

    getToken() {
        // return localStorage.getItem('app-auth')
        return localStorage.getItem('app-meta')
    }

    isAuthenticated() {
        // console.log("decodedToken "+this.decodedToken.exp)
        // console.log("unix time "+moment.unix(this.decodedToken.exp))
        console.log("isbefore "+moment().isBefore(moment.unix(this.decodedToken.exp)))

        return moment().isBefore(moment.unix(this.decodedToken.exp))
        // console.log("this decodedToken "+this.decodedToken)
        // console.log("this decodedToken.exp "+this.decodedToken.exp)
        // console.log("localstorage "+localStorage.getItem('app-meta'))
        // console.log("localstorage JSON.stringify "+JSON.stringify(localStorage.getItem('app-meta')))
        // console.log("localstorage JSON.stringify parse "+JSON.parse(JSON.stringify(localStorage.getItem('app-meta'))))


        // const token = localStorage.getItem('app-meta');
        // if (token) {
        //     console.log('token exists');
        //     return true;
        //   } else {
        //     // console.log('no token');
        //     return false;
        //   }
      
    }


    register(userData: any): Observable<any> {
        return this.http.post('/api/v1/users/register', userData)
    }

    
    login(userData: any): Observable<any> {
        return this.http.post('/api/v1/users/login', userData).pipe(map(
            (token) => {
                // debugger
                this.decodedToken = jwt.decodeToken(JSON.stringify(token))
                // localStorage.setItem('app-auth', JSON.stringify(token))
                localStorage.setItem('app-meta', JSON.stringify(this.decodedToken))
                // save token on the browser storage 
                return token
            }
        ))
    }

    logout() {
        // localStorage.removeItem('app-auth')
        localStorage.removeItem('app-meta')
        this.decodedToken = new DecodedToken()
        this.router.navigate(['/login'])
    }
}