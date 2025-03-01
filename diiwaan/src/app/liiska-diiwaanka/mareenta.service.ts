import { inject, Injectable } from '@angular/core';
import { Idiiwaanka} from '../diiwaanka';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MareentaService {

  http = inject (HttpClient);
  
  private url = 'http://localhost:3000/diiwaanka';


  diiwaanada : Idiiwaanka[]= [];

  getdiiwaankoodhan(){
    return this.http.get<Idiiwaanka[]>(this.url);
  }
  
}
