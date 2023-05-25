import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/app.component';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.css']
})
export class CustomersPageComponent {
 customers: Array<Customer> = []

    addCustomerForm = new FormGroup({
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
                Validators.maxLength(255),
                Validators.email
            ]
        }),
        address: new FormControl('', {
            validators: [
                Validators.minLength(6),
                Validators.maxLength(350)
            ]
        })
    });

    constructor(private api: ApiService) { }
     getFieldControl(field: string): FormControl {
        return this.addCustomerForm.get(field) as FormControl;
    }

    getCustomer() {
        this.api.getCustomer().subscribe({
            next: (data: Array<Customer>) => {
                this.customers = data;
            },
            error: (err) => console.log(err)
        })
    }

    ngOnInit(): void {
        this.getCustomer();
    }
    error=false;
    onSubmit() {
        this.error=false;
        if (this.addCustomerForm.invalid) {
            return;
        }
        this.api.addCustomer(this.addCustomerForm.value).subscribe({
            next: (data: Customer) => {
                this.addCustomerForm.reset();
                this.getCustomer();
            },
            error: (err) =>{
                console.log(err)
                this.error=true;
            }
        })
    }

    onDelete(customer: Customer) {
        if (!customer._id) {
            return;
        }

        this.api.deleteCustomer(customer._id).subscribe({
            next: (data: Customer) => {
                this.getCustomer();
            },
            error: (err) => console.log(err)
        })
    }
    deleteEror(){
        this.error=false;
    }
  }