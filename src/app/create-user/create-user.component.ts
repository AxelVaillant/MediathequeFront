import { Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { UserService } from '../Service/user.service';
import { RoleService } from '../Service/role.service';
import { Role } from '../models/role';
import { User } from '../models/user';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
listRole: Role[]=[];
listUser: User[]=[];
newUser: User = new User();
  constructor(private userservice : UserService,private roleservice : RoleService) { }

  ngOnInit(): void {
    this.roleservice.getAll().subscribe(
      data=>{
        this.listRole=data;
      }
    )
  }
  createUser(){
    this.userservice.create(this.newUser).subscribe(
      data=>{
        if(data['iduser']==0){

        }else if(data['iduser']){
          Swal.fire('Utilisateur crée !',
          ).then(()=>window.location.href="http://localhost:4200/user")
        }

      }
    )
  }

}
