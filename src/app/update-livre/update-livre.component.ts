import { Component, OnInit } from '@angular/core';
import { Livre } from '../models/livre';
import { LivreService } from '../Service/livre.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styleUrls: ['./update-livre.component.css']
})
export class UpdateLivreComponent implements OnInit {
newLivre: Livre= new Livre();
idLivreURL:number;

  constructor(private livreservice :LivreService,private route : ActivatedRoute) {
    this.idLivreURL=parseInt(this.route.snapshot.paramMap.get('id'))
   }

  ngOnInit(): void {
    console.log(this.idLivreURL);
    this.livreservice.getbyid(this.idLivreURL).subscribe(
      data=>(
        this.newLivre=data
      )
    )
  }
  getbyid(id:number){
    this.livreservice.getbyid(id).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
  updateLivre(id:number , Livre:Livre){
    this.livreservice.update(id,Livre).subscribe(
      data=>{
        if(data['idLivre'] ==0){
  
        }else if(data['idLivre']){
          Swal.fire(
            'Livre modifié !',
          ).then(()=>
          window.location.href ="http://localhost:4200/livre")
          
        }
      }
    )
  }
}
