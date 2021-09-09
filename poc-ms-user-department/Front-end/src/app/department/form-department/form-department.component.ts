import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/classes/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-form-department',
  templateUrl: './form-department.component.html',
  styleUrls: ['./form-department.component.css']
})
export class FormDepartmentComponent implements OnInit {

  titulo:string = "Department form";
  department:Department = new Department();

  constructor(private departmentService:DepartmentService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  insertDepartment():void{
    console.log(this.department);
    this.departmentService.insert(this.department).subscribe(res => this.router.navigate(['departments']));
  }
}
