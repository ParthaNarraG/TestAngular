import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateChild, Params, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivateChild,OnInit {
  userId:any;
  constructor(private router:Router,private route:ActivatedRoute){
    this.route.params.subscribe((params:Params)=>{
      console.log(params);
      this.userId=params['id'];
      console.log(this.userId);
    })
  }
  ngOnInit(){
   
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      if(this.userId==="user" && localStorage.getItem("isLogin")==="true"){
        return true;
      }
      else{
        if(this.userId!=="user"){
          this.router.navigate(["login"]);
          return false;
        }
      }
      return false;
  }
}
