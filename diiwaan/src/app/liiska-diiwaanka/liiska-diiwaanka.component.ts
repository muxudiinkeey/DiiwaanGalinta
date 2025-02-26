import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MareentaService } from './mareenta.service';
import { diiwaanka } from '../diiwaanka';

@Component({
  selector: 'app-liiska-diiwaanka',
  imports: [CommonModule],
  templateUrl: './liiska-diiwaanka.component.html',
  styleUrl: './liiska-diiwaanka.component.css'
})
export class LiiskaDiiwaankaComponent implements OnInit {
  pageTitle = 'Liiska Diiwaanka '; 
 //diiwaanka =[];
diiwaanada : diiwaanka[]= []
  mareentaService = inject(MareentaService )
//diiwaanka: any;


  ngOnInit(): void {
      this.getLiiskaDiiwaanka();
  }

  getLiiskaDiiwaanka(){
    return this.mareentaService.getdiiwaankoodhan().subscribe((diiwaanka)=> {
    this.diiwaanada= diiwaanka;
    })
  }

}
