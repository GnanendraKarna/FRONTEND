import { Router } from '@angular/router'; import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { Injectable } from '@angular/core';
import { UserService } from '../service/user-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private userService: UserService, private router: Router) { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        let authReq = req;
        const token = this.userService.getToken();
        // -----------------------------------
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
            console.log("inside loop : " + JSON.stringify(authReq));
        }
        console.log("authReq : " + JSON.stringify(authReq));
        return next.handle(authReq);
    }
}
export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];