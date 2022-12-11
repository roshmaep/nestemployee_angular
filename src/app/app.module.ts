import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavadminComponent } from './navadmin/navadmin.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { ViewmytaskComponent } from './viewmytask/viewmytask.component';
import { NavemployeeComponent } from './navemployee/navemployee.component';
const myRoute:Routes=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"navadmin",
    component:NavadminComponent
  },{
    path:"addemp",
    component:AddemployeeComponent
  },{
    path:"employeelogin",
    component:EmployeeloginComponent
  },
  {
    path:"viewmytask",
    component:ViewmytaskComponent
  },
  {
    path:"navemployee",
    component:NavemployeeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    NavadminComponent,
    AddemployeeComponent,
    EmployeeloginComponent,
    ViewmytaskComponent,
    NavemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
