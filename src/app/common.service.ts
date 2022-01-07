import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import{map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private _url:string="http://localhost:3000/employees";
  private _regurl:string="http://localhost:3000/users";
  private _loginDetails:string ="http://localhost:3000/loginDetails"
  

  constructor(private _http:HttpClient ,private router:Router) {  }

  getEmployees(){
   return this._http.get(this._url);
  }

  authenticate(username : string,password : string) {
    return this._http.get(this._loginDetails + "?username=" + username + "&password="+password);
  }

  checkAuthenticate(username : string) {
    return this._http.get(this._loginDetails + "?username=" + username);
  }

  checkEmployeeExist(email:string) {
    return this._http.get(this._url +"?email=" +email).pipe
    (map((res:any)=>{
      return res
    }));
  }

  updateEmployeeExist(id:string , data:any) {
    return this._http.put(this._url +"?id=" +id,data);
  }

  getLogin(username:string){
    return this._http.get(this._loginDetails + "?username=" + username );
  }

  addEmployee(data: any){
    return this._http.post<any>(this._url,data).pipe
    (map((res:any)=>{
      return res
    }))
  }

  deleteEmployee(id: any){
    return this._http.delete(`${this._url}/${id}`).pipe
    (map((res:any)=>{
      return res
    }))
  }

  getCurrentEmployee(id: any){
    return this._http.get(`${this._url}/${id}`).pipe
    (map((res:any)=>{
      return res
    }));
  }
  getloginEmployee(email: any){
    return this._http.get(`${this._url}/${email}`);
  }

  updateEmployee(id:any,data:any){
    return this._http.put(`${this._url}/${id}`,data).pipe
    (map((res:any)=>{
      return res
    }))

  }
  
  regEmployee(data: any){
    return this._http.post(this._regurl,data);
  }

  addLoginEmployee(data: any){
    return this._http.post(this._loginDetails ,data);
  }

  getCurrentLoginEmployee(id: any){
    return this._http.get(`${this._loginDetails}/${id}`);
  }





}
