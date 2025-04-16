import { inject, Injectable } from '@angular/core';
import { Idiiwaanka} from '../diiwaanka';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MareentaService {

  http = inject (HttpClient);
  
  private url = 'http://localhost:3000/diiwaanka';


getDiiwaankoodhan(){
    return this.http.get<Idiiwaanka[]>(this.url);
  }
  getHalDiiwaan(id: number){
    return this.http.get<Idiiwaanka>('${this.url}/${id}');
  }
/*
  deleteDiiwaan(sumadda: number){
  // return this.http.delete('this.url/+id+', {})
  return this.http.delete('${this.url}/{id}');
  } */
  
}
