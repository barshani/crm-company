import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { UpdatePageComponent } from './update-page/update-page.component';
import { RouterModule } from '@angular/router';
import { CustomersErrorComponent } from './customers-error/customers-error.component';
import { PageViewComponent } from './page-view/page-view.component';



@NgModule({
  declarations: [
    CustomersPageComponent,
    UpdatePageComponent,
    CustomersErrorComponent,
    PageViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CustomersPageComponent
  ]
})
export class CustomersModule { }
