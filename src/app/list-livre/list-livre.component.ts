import { Component, OnInit } from '@angular/core';
import { Livre } from '../models/livre';
import { LivreService } from '../Service/livre.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-livre',
  templateUrl: './list-livre.component.html',
  styleUrls: ['./list-livre.component.css']
})
export class ListLivreComponent implements OnInit {
listLivre: Livre[]=[]
  constructor(private livreservice : LivreService) { }

  ngOnInit(): void {
    this.livreservice.getAll().subscribe(
      data=>{
        this.listLivre=data;
        
      }
      )  
  }
  getbyid(idlivre:number){
    this.livreservice.getbyid(idlivre).subscribe(
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
}
