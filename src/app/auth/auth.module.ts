import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { FieldErrorComponent } from './field-error/field-error.component';



@NgModule({
    declarations: [
        SignupPageComponent,
        LoginPageComponent,
        FieldErrorComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        SignupPageComponent
    ]
})
export class AuthModule { }
