import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/classes/department';
import { User } from 'src/app/classes/user';
import { DepartmentService } from 'src/app/services/department.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user : User = new User();
  department : Department = new Department();
  titulo : string = "User details";


  constructor(private userService:UserService, private departmentService:DepartmentService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.showData();
  }

  showData():void {
    let id = this.activatedRoute.snapshot.params["id"];
    this.userService.getById(id).subscribe(userFounded => {
      console.log(userFounded);
      this.user = userFounded;
      this.departmentService.getById(userFounded.departmentId).subscribe(departmentFounded => {
        console.log(departmentFounded);
        this.department = departmentFounded;
      }, error => console.log(error))
    }, error => console.log(error))
  }

}
