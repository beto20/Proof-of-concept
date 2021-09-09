import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string = "http://localhost:9090/users/";

  constructor(private http:HttpClient) { }


  getAll():Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  getById(id:number):Observable<User> {
    return this.http.get<User>(this.url + id);
  }
  insert(user:User):Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  /* BROKEN METHOD
  getUserAndDepartment(id:number):Observable<Department> {
    return this.http.get<Department>("http://localhost:9090/users/department/" + id)
  }
  */
}
