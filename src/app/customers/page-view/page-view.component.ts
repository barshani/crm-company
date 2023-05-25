import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Customer } from 'src/app/app.component';
import { ApiService } from 'src/app/core/api.service';
@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.css']
})
export class PageViewComponent implements OnInit{
  customer: Customer | null = null;
  isDisabled: boolean = true;
  constructor(
        private api: ApiService,
        private activeRoute: ActivatedRoute,
        private router: Router
    ) { }
    details = new FormGroup({
         firstName: new FormControl('', {
            validators: [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(200)
            ]
        }),
        lastName: new FormControl('', {
            validators: [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(200)
            ]
        }),
        phone: new FormControl('', {
            validators: [
                Validators.required,
                Validators.minLength(9),
                Validators.maxLength(12)
            ]
        }),
        email: new FormControl('', {
            validators: [
                Validators.minLength(6),
                Validators.maxLength(255)
            ]
        }),
        address: new FormControl('', {
            validators: [
                 Validators.minLength(6),
                 Validators.maxLength(350)
            ]
        })
    })
    ngOnInit(): void {
        this.activeRoute.paramMap.pipe(switchMap(params=>{
          const id = params.get('id') as string;
          return this.api.getOneCustomer(id);
        })
        ).subscribe({
               next: (data:Customer) => {
                this.customer = data;
                const firstName = data.firstName || '';
                const lastName = data.lastName || '';
                const phone = data.phone || '';
                const email = data.email || '';
                const address = data.address || '';
                this.details.get('firstName')?.setValue(firstName)
                this.details.get('lastName')?.setValue(lastName);
                this.details.get('phone')?.setValue(phone);
                this.details.get('email')?.setValue(email);
                this.details.get('address')?.setValue(address);
                this.details.controls['firstName'].disable();
                this.details.controls['lastName'].disable();
                this.details.controls['phone'].disable();
                this.details.controls['email'].disable();
                this.details.controls['address'].disable();
                
            },
             error: (err) => console.log(err)
           })
    }
}
