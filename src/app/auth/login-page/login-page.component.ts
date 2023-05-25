import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/app.component';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/core/auth.service';
import { LoggerService } from 'src/app/core/logger.service';
@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements AfterViewInit{
    error=false;
    constructor(
         private logger: LoggerService,
        private api: ApiService,
        private router: Router,
        private auth: AuthService
    ) {

    }
    @ViewChild('nameFieldRef') nameField!: ElementRef;
     loginForm = new FormGroup({
        email: new FormControl('', {
            validators: [Validators.required, Validators.email]
        }),
        password: new FormControl('', {
            validators: [Validators.required, Validators.minLength(6)]
        })
    })
       getFieldControl(field: string): FormControl {
        return this.loginForm.get(field) as FormControl;
    }
     ngAfterViewInit(): void {
        this.logger.log('ngAfterViewInit');
    }
    onSubmit() {
        if (this.loginForm.invalid) {
            return;
        }
        this.api.login(this.loginForm.value).subscribe({
            next: (data: User) => {
                if (data.token) this.api.setToken(data.token)
                if (data.email) this.api.setEmail(data.email)

                this.router.navigate([this.auth.redirectUrl]);
            },
            error: (err) =>{
                console.log(err)
                this.error=true;
                
            }
        })
        
    }
   

}
