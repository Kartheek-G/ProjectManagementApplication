import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  employee : any;
  employees : any;

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
    this.employees = this.getEmployee(id);
    this.employeeService.employeeForm.setValue({
      FirstName: this.employees.FirstName,
      LastName: this.employees.LastName,
      Gender : this.employees.Gender,
      Email : this.employees.Email,
      MobileNumber : this.employees.MobileNumber,
      Designation : this.employees.Designation,
      DateOfJoining : this.employees.DateOfJoining
    })
    
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

  getEmployee(id : number){
    this.employeeService.getEmployeeById(id).subscribe(data => 
      this.employee = data
  )}

  onClear() {
    this.employeeService.employeeForm.reset();
    this.employeeService.initialzeFormGroup();
  }


}
