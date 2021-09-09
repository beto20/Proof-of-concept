import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { UserComponent } from './user/user.component';
import { FormDepartmentComponent } from './department/form-department/form-department.component';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { FormUserComponent } from './user/form-user/form-user.component';

const routes:Routes = [
  //{ path:'', redirectTo:'/', pathMatch:'full' },
  { path:'home', component:HomeComponent },
  { path:'users', component:UserComponent },
  { path:'users/form', component:FormUserComponent},
  { path:'users/userDetails/:id', component:UserDetailsComponent },
  { path:'departments', component:DepartmentComponent },
  { path:'departments/form', component:FormDepartmentComponent },
  // IS NOT AVAILABLE
  //{ path:'departments/:id', component:DepartmentComponent },
]



@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    UserComponent,
    FormDepartmentComponent,
    HomeComponent,
    FormUserComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
