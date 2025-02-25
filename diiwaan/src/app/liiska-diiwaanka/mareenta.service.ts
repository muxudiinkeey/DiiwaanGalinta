import { inject, Injectable } from '@angular/core';
import { diiwaanka} from '../diiwaanka';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MareentaService {

  http = inject (HttpClient);
  
  private url = 'http://localhost:3000/diiwaanka';


  diiwaanada : diiwaanka[]= [];

  getdiiwaanka(){
    return this.http.get<diiwaanka[]>(this.url);
  }
  
}
