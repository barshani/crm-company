import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/app.component';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.css']
})
export class EmployeesPageComponent {
 employees:Array<Employee>=[
  {
    name:"yossi cohen",
    birthday:"7/7/96",
    email:"yossi@gmail.com",
    phone:"0501234321"
  },
  {
    name:"hila david",
    birthday:"8/3/76",
    email:"hila@gmail.com",
    phone:"0547564775",
  },
  {
    name:"lihi levy",
    birthday:"7/1/00",
    email:"lihi@gmail.com",
    phone:"0578476354",
  },
  {
    name:"yoav katz",
    birthday:"9/11/99",
    email:"yoav@gmail.com",
    phone:"0506543562"
  },
  {
    name:"liav brushenski",
    birthday:"23/4/90",
    email:"liav@gmail.com",
    phone:"0522333432",
  },
  {
    name:"liat biloo",
    birthday:"1/12/01",
    email:"liat@gmail.com",
    phone:"0547564756",
  }
 ];
 filtered:Array<Employee>=[];
 getEmployee() {
    let text=document.getElementById('text') as HTMLInputElement;
    let word=text?.value;
    this.filtered=this.employees.filter(employee=>employee.name?.includes(word.toLowerCase().trim()))
  }

    ngOnInit(): void {
        this.getEmployee();
    }
}
