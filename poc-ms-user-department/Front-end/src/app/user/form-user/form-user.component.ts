import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  titulo:string = "Register new user";
  user:User = new User();

  constructor(private userService:UserService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  insertUser():void {
    this.userService.insert(this.user).subscribe(res => this.router.navigate(['users']));
  }

}
