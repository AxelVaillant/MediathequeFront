import { Component, OnInit } from '@angular/core';
import { Livre } from '../models/livre';
import { LivreService } from '../Service/livre.service';
import Swal from 'sweetalert2';
import { SelectorMatcher } from '@angular/compiler';
import { stringify } from 'querystring';
import { User } from '../models/user';
import { UserService } from '../Service/user.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-list-livre',
  templateUrl: './list-livre.component.html',
  styleUrls: ['./list-livre.component.css']
})
export class ListLivreComponent implements OnInit {
listLivre: Livre[]=[]
listUser:User[]=[]
admin:boolean=false
  constructor(private livreservice : LivreService,private userservice : UserService) { }

  ngOnInit(): void {
    

    this.livreservice.getAll().subscribe(
      data=>{
        this.listLivre=data;
        
      }
      )  
      this.userservice.getAll().subscribe(
        data=>{
          this.listUser=data;
          
        }
        )  
  }

  isadmin(){
    if(localStorage.getItem("role")=="Admin"){
      this.admin=true;
      return this.admin
    }else{
      return this.admin
    }
  }
  getbyid(idLivre:number){
    this.livreservice.getbyid(idLivre).subscribe(
      data=>(
        console.log(data)
      )
    )

  }
  updatelivre(id:number,livre:Livre){
    this.livreservice.update(id,livre).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
  deletelivre(id:number){
    Swal.fire({
      title: 'Etes vous sur ?',
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, Supprimer!'
    }).then((result)=> {
    if(result.value){
      this.livreservice.delete(id).subscribe(
        data=>{
   if(data){
            Swal.fire(
              'Livre supprimé!',
            ).then(()=>
             window.location.href = "http://localhost:4200/livre"
            )
          }
        }
      )}
   
    })

  }

  emprunt(id:number){
    Swal.fire({
      title: 'Etes vous sur ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, Emprunter!'
    }).then((result)=>{
      if(result.value){
        this.livreservice.emprunt(id).subscribe(
          data=>{
            if(data){
              Swal.fire(
                'Livre emprunté !',
              ).then(()=>window.location.href="http://localhost:4200/livre")
            }
          }
        )
      }
    })

  }

 rendre(id:number,livre:Livre){
    Swal.fire({
      title: 'Etes vous sur ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, Rendre!'
    }).then((result)=>{
      if(result.value){
        this.livreservice.annulation(id,livre).subscribe(
          data=>{
            if(data){
              Swal.fire(
                'Livre rendu !',
              ).then(()=>window.location.href="http://localhost:4200/livre")
            }
          }
        )
      }
    })

  }
}
