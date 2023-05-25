import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Customer } from 'src/app/app.component';
import { ApiService } from 'src/app/core/api.service';
@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css']
})
export class UpdatePageComponent implements OnInit {
    customer: Customer | null = null;
    bol:boolean=false;
    editCustomerForm = new FormGroup({
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

    constructor(
        private api: ApiService,
        private activeRoute: ActivatedRoute,
        private router: Router
    ) { }
     getFieldControl(field: string): FormControl {
        return this.editCustomerForm.get(field) as FormControl;
    }

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
                this.editCustomerForm.get('firstName')?.setValue(firstName);
                this.editCustomerForm.get('lastName')?.setValue(lastName);
                this.editCustomerForm.get('phone')?.setValue(phone);
                this.editCustomerForm.get('email')?.setValue(email);
                this.editCustomerForm.get('address')?.setValue(address);
            },
             error: (err) => console.log(err)
           })
    }

    onSubmit() {
        if (this.editCustomerForm.invalid || !this.customer?._id) {
            return;
        }

        this.api.updateCustomer(this.customer?._id, this.editCustomerForm.value).subscribe({
            next: (data: Customer) => {
                this.router.navigate(['customers']);
            },
            error: (err) => console.log(err)
        })
    }


}
