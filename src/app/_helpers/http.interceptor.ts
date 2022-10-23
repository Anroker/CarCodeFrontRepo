import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/jwt/token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';       // for Spring Boot back-end
@Injectable()
//Change name of class
export class HttpRequestInterceptor implements HttpInterceptor {
    constructor(private token: TokenStorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
        const token = this.token.getToken();

        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
          }

        // req = req.clone({
        //     withCredentials: true,
        // });
        return next.handle(authReq);
    }
}

export const HttpInterceptorProviders = [{
    provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true
},
]
