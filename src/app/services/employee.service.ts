import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  employeeForm : FormGroup = new FormGroup({
    FirstName : new FormControl('', Validators.required),
    LastName : new FormControl('',Validators.required),
    Gender: new FormControl(''),
    Email : new FormControl('',Validators.email),
    MobileNumber : new FormControl('',[Validators.required, Validators.minLength(10)]),
    Designation : new FormControl(''),
    DateOfJoining: new FormControl('')

  });

  initialzeFormGroup(){
    this.employeeForm.setValue({
    FirstName : '',
    LastName : '',
    Gender: '',
    Email : '',
    MobileNumber : '',
    Designation : '',
    DateOfJoining: ''

    })
  };

  private employee!: Employee;
  private baseUrl: string = 'https://localhost:44369/api/Employee/';
 
  private headers = new HttpHeaders().set('Content-Type','application/json');

  constructor(private http: HttpClient) { }
  

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl+"getEmployees");
  }


  createEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(this.baseUrl+"postEmployee", employee,{headers:this.headers});
  }
  

  getEmployeeById(id: any): Observable<any> {
    return this.http.get(this.baseUrl+'getEmployee/'+id);
  }


  updateEmployee(id: any, data: any): Observable<any> {
    return this.http.put(this.baseUrl+'putEmployee/'+id, data);
  }

  deleteEmployee(id:number): Observable<any>{
    return this.http.delete(this.baseUrl+'deleteEmployee/'+id);
  }

  setter(employee:Employee){
    this.employeeForm.setValue({
      FirstName: employee.FirstName,
      LastName: employee.LastName,
      Gender : employee.Gender,
      Email : employee.Email,
      MobileNumber : employee.MobileNumber,
      Designation : employee.Designation,
      DateOfJoining : employee.DateOfJoining
   });
  }

  getter(){
    return this.employee;
  }
}
