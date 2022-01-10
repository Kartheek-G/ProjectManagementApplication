import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Allocation } from 'src/app/models/allocation.model';
import { AllocationService } from 'src/app/services/allocation.service';


@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {
  
  project!:any;
  allocation! : any;
  allocations! : any;


  constructor(private projectService : ProjectService, private route : ActivatedRoute,
    private router : Router, public allocationService : AllocationService) { }


   

    setProjectId(){
      this.allocationService.allocationForm.get('ProjectId')?.setValue(this.route.snapshot.params['id'])
    }

    

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.getProject(id);
    this.getProjectEmployees(id);
  }

  getProject(id:number) {
    this.projectService.getProjectById(id).subscribe(data => {
      console.log(data);
      this.project= data;
  })};

  onSubmit(){
    if(this.allocationService.allocationForm.valid){
      this.setProjectId();
      this.allocationService.createAllocation(this.allocationService.allocationForm.value).subscribe(
        error => {
          console.log(error);
        }
      );
      console.log(this.allocationService.allocationForm.value);
      this.allocationService.allocationForm.reset();
      this.allocationService.initialzeFormGroup();
      window.location.reload()
    }
  }

  onClear() {
    this.allocationService.allocationForm.reset();
    this.allocationService.initialzeFormGroup();
  }

  onDelete(id:number){
    this.projectService.deleteProject(id).subscribe( res => {
      console.log(res);
      this.router.navigate(['/allprojects']);
    })};

  doUpdate(projectId: number){
    this.router.navigate(['/editproject', projectId]);
    }


    getProjectEmployees(id:number) {
      this.allocationService.getAllocationByProjectId(id).subscribe(data => {
        console.log(data);
        this.allocations = data;
    })};

    onDeleteEmp(id:number){
      this.allocationService.deleteAllocation(id).subscribe( res => {
        console.log(res);
        window.location.reload()
      })};

}
