import { inject, Injectable } from '@angular/core';
import { diiwaan} from '../diiwaan';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MareentaService {

  http = inject (HttpClient);
  
  private url = 'http://localhost:3000/diiwaanka';


  items : diiwaan[]= [];

  getdiiwaanka(){
    return this.http.get<diiwaan[]>(this.url);
  }
  
}
