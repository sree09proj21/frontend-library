import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUser(user:any)
  {
    return this.http.post<any>("http://localhost:8000/login",user)
    
  }
  constructor(public http:HttpClient) { }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
    
  }

}
