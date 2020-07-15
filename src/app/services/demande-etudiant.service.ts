import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from 'src/config';
import { DemandeDeStage } from '../Models/DemandeDeStage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeEtudiantService {

  constructor(private _http:HttpClient) { }
  header={
    headers:new HttpHeaders({
      "Access-Control-Allow-Origin":"*",
      "Authorization":"Bearer "+localStorage.getItem('token')

    })
  }
  ajouter(body){
  return  this._http.post<DemandeDeStage>(apiUrl+'demandesave',body,this.header);
  }

  getall():Observable<any>{
    return  this._http.get(apiUrl+'mesdemandes',this.header);
    }
}