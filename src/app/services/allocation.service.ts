import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Allocation } from '../models/allocation.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AllocationService {


  allocationForm : FormGroup = new FormGroup({
    ProjectId :new FormControl(),
    EmployeeId : new FormControl('', Validators.required)
  });

  initialzeFormGroup(){
    this.allocationForm.setValue({
      EmployeeId: 0,

    })
  };

  private baseUrl: string = 'https://localhost:44369/api/Allocation/';

  private headers = new HttpHeaders().set('Content-Type','application/json');

  constructor(private http: HttpClient) { }
  

  getAll(): Observable<Allocation[]> {
    return this.http.get<Allocation[]>(this.baseUrl+"/getAllocations");
  }


  createAllocation(allocation: Allocation): Observable<Allocation>{
    return this.http.post<Allocation>(this.baseUrl+"postAllocation", allocation,{headers:this.headers});
  }

  getAllocationById(id: any): Observable<any> {
    return this.http.get(this.baseUrl+'getAllocation/'+id);
  }

  getAllocationByEmployeeId(id: any): Observable<any> {
    return this.http.get(this.baseUrl+'getAllocationByEmployee/'+id);
  }

  getAllocationByProjectId(id: any): Observable<any> {
    return this.http.get(this.baseUrl+'getAllocationByProject/'+id);
  }

  deleteAllocation(id:number): Observable<any>{
    return this.http.delete(this.baseUrl+'deleteAllocation/'+id);
  }



}
