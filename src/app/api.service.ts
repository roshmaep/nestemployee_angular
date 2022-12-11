import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addemployee=(dataToSend:any)=>{
    return this.http.post("https://mylinkurcodesapp.herokuapp.com/addemployee",dataToSend)
    }
    userLogin=(datatosend:any)=>{
      return this.http.post("http://localhost:8080/userLogin",datatosend)
    }
}
