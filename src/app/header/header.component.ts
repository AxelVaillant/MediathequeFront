import { Component, OnInit } from '@angular/core';
import { RoleService } from '../Service/role.service';
import { Role } from '../models/role';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
ListRole: Role[]=[];
  constructor(private roleservice: RoleService,private router: Router) { }
  admin:boolean=false
  ngOnInit(): void {
    this.roleservice.getAll().subscribe(
      data=>{
        this.ListRole=data;
      }
    )
  }
  logout(){
    localStorage.clear()
    this.router.navigate(["user/login"]);
  }
  isadmin(){
    if(localStorage.getItem("role")=="Admin"){
      this.admin=true;
      return this.admin
    }else{
      return this.admin
    }
  }
}
