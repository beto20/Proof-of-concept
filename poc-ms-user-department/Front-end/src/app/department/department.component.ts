import { Component, OnInit } from '@angular/core';
import { Department } from '../classes/department';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  titulo:string = "Lista de departamentos de la empresa";
  departmentsList! : Department[];
  department : Department = new Department();

  constructor(private departmentService:DepartmentService) { }

  ngOnInit(): void {
    this.getAllDepartment();
  }

  getAllDepartment():void{
    this.departmentService.getAll().subscribe(departments => this.departmentsList = departments);
  }

  getDepartmentById(id:number):void{
    this.departmentService.getById(id).subscribe(department => this.department = department);
  }
}
