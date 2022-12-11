import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  code=""
  name=""
  email=""
  phone=""
  designation=""
  username=""
  password=""
  cpassword=""
  constructor(private api:ApiService){}
  readValues=()=>
  {
  let data:any={"code":this.code,"name":this.name,"email":this.email,"phone":this.phone,"designation":this.designation,"username":this.username,"password":this.password,"cpassword":this.password}
  console.log(data)
  this.api.addemployee(data).subscribe(
    (response:any)=>{console.log(response)
      if(response.status =="success"){
        alert("product added successfully")
       
        this.code=""
        this.name=""
        this.email=""
        this.phone=""
        this.designation=""
        this.username=""
        this.password=""
        this.cpassword=""
      }
      else{
        alert("something wrong")
      }
    }
  ) 
}

}
