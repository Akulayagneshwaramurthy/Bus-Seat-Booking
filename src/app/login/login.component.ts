// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
url2="./assets/Images/OIP.jpg";

  loginobj:any = {
     username: '',
     password: ''
  }
  
  constructor(private router: Router) {}

  onlogin() {
     if(this.loginobj.username == "yagneshalkula12345@gmail.com" && this.loginobj.password == "12345678"){
      this.router.navigateByUrl('/home')
     }else{
      alert("wrong")
     }
  }
}