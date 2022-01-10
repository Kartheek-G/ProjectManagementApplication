import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { AllocationService } from 'src/app/services/allocation.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { AddemployeeComponent } from '../addemployee/addemployee.component';


@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  employee:any;
  public id! : number;

  allocations : any;

  constructor(private employeeService:EmployeeService,
     private router: Router,private route: ActivatedRoute, 
     private addemployee : AddemployeeComponent,
     public allocationService : AllocationService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.getEmpoyee(id);
    this.getEmployeeProject(id);
  }

  onDelete(id:number){
    this.employeeService.deleteEmployee(id).subscribe( res => {
      console.log(res);
      this.router.navigate(['/allemployees']);
    })};

  doUpdate(employeeId: number){
    this.router.navigate(['/editemployee', employeeId]);
    }


    doUpdateEmp(employee: Employee){
      this.employeeService.setter(employee);
      console.log(employee)
      this.router.navigate(['/addemployee']);
      }


      getEmployeeProject(id:number) {
        this.allocationService.getAllocationByProjectId(id).subscribe(data => {
          console.log(data);
          this.allocations = data;
      })};
    
  

  getEmpoyee(id:number) {
    this.employeeService.getEmployeeById(id).subscribe(data => {
      console.log(data);
      this.employee = data;
  });

 

  
  

 
 
  
  

  



 




  }

}
 