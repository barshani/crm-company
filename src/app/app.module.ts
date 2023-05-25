import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CustomersModule } from './customers/customers.module';
import { AuthModule } from './auth/auth.module';
import { EmployeesModule } from './employees/employees.module';
import { SharedModule } from './shared/shared.module';
import { LoginPageComponent } from './auth/login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     AuthModule,
     AppRoutingModule,
     CoreModule,
     CustomersModule,
     EmployeesModule,
     SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
