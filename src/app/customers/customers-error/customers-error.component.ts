import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-customers-error',
  templateUrl: './customers-error.component.html',
  styleUrls: ['./customers-error.component.css']
})
export class CustomersErrorComponent {
  @Input() formField?: FormControl<any>;

    fieldErr(): string {
        const control = this.formField;
        if (
            !control ||
            !control.errors ||
            !control.dirty ||
            !control.touched
        ) {
            return '';
        }

        if (control.getError('required')) {
            return 'This field is required';
        }

        const maxlengthErr = control.getError('maxlength');
        if (maxlengthErr) {
            return `field cannot be longer than ${maxlengthErr.requiredLength}`;
        }
        const minlengthErr = control.getError('minlength');
        if (minlengthErr) {
            return `field cannot be less than ${minlengthErr.requiredLength}`;
        }

        if (control.getError('email')) {
            return 'Email is not valid';
        }
        return '';
    }
}
