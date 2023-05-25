import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import {AuthService} from './auth.service'

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    constructor(
        private router: Router,
        private api: ApiService,
        private auth: AuthService
        ) { }

    redirectToHome() {
        if(!this.api.getToken)
            this.router.navigate(['/login'])
    }
}
