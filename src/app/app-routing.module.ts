import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './components/employee/addemployee/addemployee.component';
import { EditemployeeComponent } from './components/employee/editemployee/editemployee.component';
import { EmployeedetailsComponent } from './components/employee/employeedetails/employeedetails.component';
import { EmployeeslistComponent } from './components/employee/employeeslist/employeeslist.component';
import { HomeComponent } from './components/home/home.component';
import { AddprojectComponent } from './components/project/addproject/addproject.component';
import { EditprojectComponent } from './components/project/editproject/editproject.component';
import { ProjectdetailsComponent } from './components/project/projectdetails/projectdetails.component';
import { ProjectslistComponent } from './components/project/projectslist/projectslist.component';


const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'allprojects', component : ProjectslistComponent},
  {path : 'addemployee', component : AddemployeeComponent},
  {path : 'addproject', component : AddprojectComponent},
  {path : 'allemployees', component : EmployeeslistComponent},
  {path : 'employeedetails/:id', component : EmployeedetailsComponent},
  {path : 'projectdetails/:id', component : ProjectdetailsComponent},
  {path : 'editemployee/:id', component : EditemployeeComponent},
  {path : 'editproject/:id', component : EditprojectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
