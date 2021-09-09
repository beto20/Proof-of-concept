import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  titulo : string = "Lista de usuarios"
  userList! : User[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser():void {
    this.userService.getAll().subscribe(users => this.userList = users);
  }

  getUserAndDepartment():void {
    //this.userService.getUserAndDepartment
  }

}
