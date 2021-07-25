import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  validateCredentials(user:string,password:string){
    if(user==="ParthaNarra" && password==="partha"){
      localStorage.setItem("isLogin","true");
      this.router.navigate(['test'])
    }
    else{
      alert("Wrong Credentials");
    }
  }
}
