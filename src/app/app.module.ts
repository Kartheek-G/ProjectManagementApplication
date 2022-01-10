import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { EmployeeService } from './services/employee.service';
import { ProjectService } from './services/project.service';
import { AllocationService } from './services/allocation.service';

import { NavbarComponent } from './components/navbar/navbar.component';
import { EmployeeslistComponent } from './components/employee/employeeslist/employeeslist.component';
import { AddemployeeComponent } from './components/employee/addemployee/addemployee.component';
import { AddprojectComponent } from './components/project/addproject/addproject.component';
import { ProjectslistComponent } from './components/project/projectslist/projectslist.component';
import { EmployeedetailsComponent } from './components/employee/employeedetails/employeedetails.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectdetailsComponent } from './components/project/projectdetails/projectdetails.component';
import { EditemployeeComponent } from './components/employee/editemployee/editemployee.component';
import { EditprojectComponent } from './components/project/editproject/editproject.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeeslistComponent,
    AddemployeeComponent,
    AddprojectComponent,
    ProjectslistComponent,
    EmployeedetailsComponent,
    HomeComponent,
    ProjectdetailsComponent,
    EditemployeeComponent,
    EditprojectComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [EmployeeService, ProjectService, AllocationService, AddemployeeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
