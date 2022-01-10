import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  employee : any;

  constructor(public employeeService: EmployeeService, private route: ActivatedRoute) { }

 
  designations = [
    {id:1, value:'Developer'},
    {id:2, value:'Designer'},
    {id:3, value:'Tester'},
    {id:4, value:'DevOps Engineer'},
    {id:5, value:'HR Analyst'},
  ];

  

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
  }


  onSubmit(){
    if(this.employeeService.employeeForm.valid){
      this.employeeService.createEmployee(this.employeeService.employeeForm.value).subscribe(
        error => {
          console.log(error);
        }
      );
      console.log(this.employeeService.employeeForm.value);
      this.employeeService.employeeForm.reset();
      this.employeeService.initialzeFormGroup();
    }
  }


  onClear() {
    this.employeeService.employeeForm.reset();
    this.employeeService.initialzeFormGroup();
  }


}
