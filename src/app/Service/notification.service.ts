import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notification } from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get<Notification[]>('http://localhost:8080/notification/all').pipe()

  }
  create(notification:Notification){
    return this.http.post<Notification[]>('http://localhost:8080/notification/save',notification).pipe()

  }
  getbyid(id:number){
    return this.http.get<Notification>('http://localhost:8080/notification/byid/'+id).pipe()
  }
}
