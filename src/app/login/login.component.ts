import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={uname:'',pswd:''}
  constructor(private auth:AuthService,public router:Router,private fb:FormBuilder) { }
  loginForm=this.fb.group(
    {
     uname:['',[Validators.required,Validators.pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      pswd:['',[Validators.minLength(6),Validators.required]]
    }
  )
  ngOnInit(): void {
  }
  loginUser()
  {
    if(this.user.uname!="admin@gmail.com"||this.user.pswd!="admin123")
    {     
        alert("Invalid Login Credentials")
          }
    else{}
    this.auth.loginUser(this.user)
    .subscribe(
      res=>{
      localStorage.setItem('token',res.token)
      this.router.navigate([''])
    }
    )
    }

}
