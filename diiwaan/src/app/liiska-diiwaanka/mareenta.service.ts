import { inject, Injectable } from '@angular/core';
import { Diiwaan } from '../diiwaan';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MareentaService {

  http = inject (HttpClient);
  
  private url = 'http://localhost:3000/diiwaanka';


  diiwaanka : Diiwaan[]= [];

  getdiiwaanka(){
    return this.http.get(this.url);
  }
  
}
