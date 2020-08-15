import { Component, OnInit } from '@angular/core';
import { Role } from '../models/role';
import { RoleService } from '../Service/role.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  constructor(private roleservice: RoleService) { }
  newRole : Role= new Role();
  ngOnInit(): void {
  }
createRole(){
  this.roleservice.create(this.newRole).subscribe(
    data=>{
      if(data['idRole'] ==0){

      }else if(data['idRole']){
        Swal.fire(
          'Role ajouté !',
        ).then(()=>
        window.location.href ="http://localhost:4200/role")
        
      }
    }
  )
}
}
