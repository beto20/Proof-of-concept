import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../classes/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private url:string = "http://localhost:9090/departments/";

  constructor(private http:HttpClient) { }

  getAll():Observable<Department[]> {
    return this.http.get<Department[]>(this.url);
  }

  getById(id:number):Observable<Department> {
    return this.http.get<Department>(this.url + id);
  }

  insert(department:Department):Observable<Department> {
    return this.http.post<Department>(this.url, department);
  }

}
