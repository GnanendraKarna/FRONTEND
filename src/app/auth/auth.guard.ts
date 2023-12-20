import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user-service.service';

@Injectable({
    providedIn: 'root'
})
export class Authguard implements CanActivate {
    constructor(
        private userService: UserService,
        private router: Router
    ) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.userService.isLogedIn()) {
            return true;
        } else {
            alert("You must be logged in to access this page");
            this.router.navigate(['/login']);
            return false;
        }
    }
}