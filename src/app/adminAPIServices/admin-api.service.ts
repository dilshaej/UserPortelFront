import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAPIService {
server_url:string="https://userportel-angular.onrender.com"
  constructor(private http:HttpClient,private router:Router) { }

  authenticateAPI(email:string,password:string){
return this.http.get(`${this.server_url}/users/1`).subscribe((result:any)=>{
  if(result.email==email && result.password==password){
    sessionStorage.setItem("adminDetails",JSON.stringify(result))
    alert("Login success")
    this.router.navigateByUrl('dashboard')
  }else{
    alert("Invalid email/password")
  }
})
  }

  getAdminDetails(){
    return this.http.get(`${this.server_url}/users/1`)
  }

  updateAdminDetails(adminDetails:any){
    return this.http.put(`${this.server_url}/users/1`,adminDetails)
 }

 isAuthorized(){
  return !!sessionStorage.getItem("adminDetails")
 }
}