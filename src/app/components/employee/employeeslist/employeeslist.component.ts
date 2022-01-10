import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.css']
})
export class EmployeeslistComponent implements OnInit {

  employees: any;
  searchKey!: string;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  @ViewChild(MatPaginator) paginator! : MatPaginator;

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getAll().subscribe(res => {
      console.log(res);
      this.employees = res;
    })

  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.employees.filter = this.searchKey.trim().toLowerCase();
  }
}
