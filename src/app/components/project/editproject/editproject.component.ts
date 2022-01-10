import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent implements OnInit {

  project : any;
  id!:number;

  constructor(public projectService: ProjectService, 
    private route: ActivatedRoute, private router : Router) { }

    
  projectStatus = [
    {id:1, value:'Initiated'},
    {id:2, value:'Terminated'},
    {id:3, value:'Delayed'},
    {id:4, value:'Completed'},
  ];

 
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    let projectdata = this.getProject(id);
  }
  
  onSubmit(){
      this.projectService.createProject(this.project).subscribe(
        error => {
          console.log(error);
        }
      );
      console.log(this.projectService.projectForm.value);
      this.projectService.projectForm.reset();
      this.projectService.initialzeFormGroup();
    }
  

  onClear() {
    this.projectService.projectForm.reset();
    this.projectService.initialzeFormGroup();
  }

  getProject(id:number) {
    this.projectService.getProjectById(id).subscribe(data => {
      console.log(data);
      this.project = data;
  })};



}
