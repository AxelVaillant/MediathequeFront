import { Component, OnInit } from '@angular/core';
import { Livre } from '../models/livre';
import { LivreService } from '../Service/livre.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-livre',
  templateUrl: './create-livre.component.html',
  styleUrls: ['./create-livre.component.css']
})
export class CreateLivreComponent implements OnInit {
newLivre :Livre= new Livre();
  constructor(private livreservice:LivreService) { }

  ngOnInit(): void {
  }
  createLivre(){
    this.livreservice.create(this.newLivre).subscribe(
      data=>{
        if(data['idLivre']==0){

        }else if(data['idLivre']){
          Swal.fire('Livre ajouté !',
          ).then(()=>window.location.href="http://localhost:4200/livre")
        }

      }
    )
  }
}
