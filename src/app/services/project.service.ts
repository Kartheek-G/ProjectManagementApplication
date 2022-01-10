import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  
  projectForm : FormGroup = new FormGroup({
    ProjectTitle : new FormControl('', Validators.required),
    ProjectDescription :new FormControl('', Validators.required),
    ProjectStatus: new FormControl('',Validators.required),
    StartDate : new FormControl('', Validators.required),
    EndDate : new FormControl('', Validators.required)
  });


  initialzeFormGroup(){
    this.projectForm.setValue({
      ProjectTitle : '',
      ProjectDescription :'',
      ProjectStatus: '',
      StartDate : '',
      EndDate : '',
    })
  };


  private baseUrl: string = 'https://localhost:44369/api/Project/';
  private headers = new HttpHeaders().set('Content-Type','application/json');

  constructor(private http: HttpClient) { }
  

  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl+"getProjects");
  }


  createProject(project: Project): Observable<Project>{
    return this.http.post<Project>(this.baseUrl+"postProject",project,{headers:this.headers});
  }

  getProjectById(id: any): Observable<any> {
    return this.http.get(this.baseUrl+'getProject/'+id);
  }


  deleteProject(id:number): Observable<any>{
    return this.http.delete(this.baseUrl+'deleteProject/'+id);
  }


  updateProject(id: any, data: any): Observable<any> {
    return this.http.put(this.baseUrl+'putProject/'+id, data);
  }

}