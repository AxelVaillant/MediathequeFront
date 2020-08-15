import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Role } from '../models/role';
import { UserService } from '../Service/user.service';
import { RoleService } from '../Service/role.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
newUser: User=new User()
idUserURL:number
listRole:Role[]=[]
  constructor(private userservice:UserService,private roleservice:RoleService,private route:ActivatedRoute) { 
    this.idUserURL= parseInt(this.route.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
    this.roleservice.getAll().subscribe(
      data=>{
        this.listRole=data;
      }
    )
    console.log(this.idUserURL);
    this.userservice.getbyid(this.idUserURL).subscribe(
      data=>(
        this.newUser=data
      )
    )
  }
getbyid(id:number){
  this.userservice.getbyid(id).subscribe(
    data=>(
      console.log(data)
    )
  )
}
updateUser(id:number , User:User){
  this.userservice.update(id,User).subscribe(
    data=>{
      if(data['iduser'] ==0){

      }else if(data['iduser']){
        Swal.fire(
          'Utilisateur modifié !',
        ).then(()=>
        window.location.href ="http://localhost:4200/user")
        
      }
    }
  )
}
compareFn(user1: User, user2: User) {
  return user1 && user2 ? user1.iduser === user2.iduser : user1 === user2;
}
}
