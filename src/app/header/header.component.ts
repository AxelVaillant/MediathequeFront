import { Component, OnInit } from '@angular/core';
import { RoleService } from '../Service/role.service';
import { Role } from '../models/role';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
ListRole: Role[]=[];
  constructor(private roleservice: RoleService) { }

  ngOnInit(): void {
    this.roleservice.getAll().subscribe(
      data=>{
        this.ListRole=data;
      }
    )
  }

}
