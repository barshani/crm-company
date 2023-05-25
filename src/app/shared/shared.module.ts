import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
     AppRoutingModule,
     AuthModule
  ],
  exports:[
    FooterComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
