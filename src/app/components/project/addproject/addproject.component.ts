import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import { AllocationService } from 'src/app/services/allocation.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {

  project : any;

  constructor(public projectService: ProjectService, 
    private route: ActivatedRoute, private router : Router,
    public allocationService : AllocationService) { }


  projectStatus = [
    {id:1, value:'Initiated'},
    {id:2, value:'Terminated'},
    {id:3, value:'Delayed'},
    {id:4, value:'Completed'},
  ];


  ngOnInit(): void {

  }


  onSubmit(){
    if(this.projectService.projectForm.valid){
      this.projectService.createProject(this.projectService.projectForm.value).subscribe(
        error => {
          console.log(error);
        }
      );
      console.log(this.projectService.projectForm.value);
      let projectId = this.projectService.projectForm.value;
      this.projectService.projectForm.reset();
      this.projectService.initialzeFormGroup();
    }
  }

  onClear() {
    this.projectService.projectForm.reset();
    this.projectService.initialzeFormGroup();
  }


  // onSubmitEmp(){
  //   if(this.allocationService.allocationForm.valid){
  //     this.setProjectId();
  //     this.allocationService.createAllocation(this.allocationService.allocationForm.value).subscribe(
  //       error => {
  //         console.log(error);
  //       }
  //     );
  //     console.log(this.allocationService.allocationForm.value);
  //     this.allocationService.allocationForm.reset();
  //     this.allocationService.initialzeFormGroup();
  //   }
  // }


}

