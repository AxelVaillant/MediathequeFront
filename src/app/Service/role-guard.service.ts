import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(public router : Router) { }
  canActivate():boolean{
    if(localStorage.getItem("role")==("Admin")){
      return true
    }else{
      this.router.navigate(['user/login']);
      return false;
    }
  }
}
