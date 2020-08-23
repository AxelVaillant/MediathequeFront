import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../Service/notification.service';
import { Notification } from '../models/notification';
import { Livre } from '../models/livre';
import { LivreService } from '../Service/livre.service';
@Component({
  selector: 'app-list-notif',
  templateUrl: './list-notif.component.html',
  styleUrls: ['./list-notif.component.css']
})
export class ListNotifComponent implements OnInit {
listNotif:Notification[]=[];
listLivre:Livre[]=[]
  constructor(private notifservice: NotificationService,private livreservice : LivreService) { }

  ngOnInit(): void {
    this.notifservice.getAll().subscribe(
      data=>{
        this.listNotif=data;
      }
    )
    this.livreservice.getAll().subscribe(
      data=>{
        this.listLivre=data;
      }
    )
  }

  getbyid(idnotif:number){
    this.notifservice.getbyid(idnotif).subscribe(
      data=>(
        console.log(data)
      )
    )

  }
}
