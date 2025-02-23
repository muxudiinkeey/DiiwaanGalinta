import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MareentaService } from './mareenta.service';
import { Diiwaan } from '../diiwaan';

@Component({
  selector: 'app-liiska-diiwaanka',
  imports: [CommonModule],
  templateUrl: './liiska-diiwaanka.component.html',
  styleUrl: './liiska-diiwaanka.component.css'
})
export class LiiskaDiiwaankaComponent implements OnInit {
  
diiwaanka =[];
diiwaan : Diiwaan[]= []
  mareentaService = inject(MareentaService )


  ngOnInit(): void {
      this.getLiiskaDiiwaanka();
  }

  getLiiskaDiiwaanka(){
    return this.mareentaService.getdiiwaanka().subscribe((diiwaan)=> {
    this.diiwaan= this.diiwaan
    })
  }

}
