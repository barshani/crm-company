import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { ApiService } from './api.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AuthService implements CanActivateChild {
    redirectUrl = 'customers';
    helper=new JwtHelperService();
    constructor(
        private api: ApiService,
        private router: Router,
    ) { }

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
        if (this.isLoggedIn()) return true;
        
        this.redirectUrl = state.url;
        
        return this.router.navigate(['login'])
    }

    isLoggedIn(): boolean {
        const token = this.api.getToken();
        if(this.helper.isTokenExpired(token)){
            localStorage.removeItem('token')
        }
        return (token && token.length > 0) ? true : false;
    }
}
