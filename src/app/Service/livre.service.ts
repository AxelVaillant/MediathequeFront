import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livre } from '../models/livre';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor(private http:HttpClient) { }
  
  getAll(){
    return this.http.get<Livre[]>('http://localhost:8080/livre/all').pipe()

  }
  create(livre:Livre){
    return this.http.post<Livre[]>('http://localhost:8080/livre/save',livre).pipe()

  }
  update(id:number,livre:Livre){
    return this.http.put<Livre>('http://localhost:8080/livre/update/'+id,livre).pipe()
  }
  getbyid(id:number){
    return this.http.get<Livre>('http://localhost:8080/livre/byid/'+id).pipe()
  }
  delete(id:number){
    return this.http.post<Livre>('http://localhost:8080/livre/delete/'+id,{}).pipe()
  }
}
