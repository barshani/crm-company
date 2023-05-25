import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { SignupPageComponent } from './auth/signup-page/signup-page.component';
import { CustomersPageComponent } from './customers/customers-page/customers-page.component';
import { UpdatePageComponent } from './customers/update-page/update-page.component';
import { AuthService } from './core/auth.service';
import { PageViewComponent } from './customers/page-view/page-view.component';
import { EmployeesPageComponent } from './employees/employees-page/employees-page.component';

const routes: Routes = [
  { path: 'signup', component: SignupPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', component: LoginPageComponent },
  {
        path: '',
        canActivateChild: [AuthService],
        children: [
            { path: 'customers', component: CustomersPageComponent},
            { path: 'employees', component: EmployeesPageComponent},
            { path: 'edit-customer/:id', component: UpdatePageComponent }, 
            { path: 'view-customer/:id', component: PageViewComponent }   
        ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
