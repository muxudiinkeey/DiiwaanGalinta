import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MareentaService } from './mareenta.service';
import {  Idiiwaanka } from '../diiwaanka';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-liiska-diiwaanka',
  imports: [CommonModule],
  templateUrl: './liiska-diiwaanka.component.html',
  styleUrl: './liiska-diiwaanka.component.css'
})
export class LiiskaDiiwaankaComponent implements OnInit {
  pageTitle = 'Liiska Diiwaanka '; 
 
Liiska : Idiiwaanka[]= []
  mareenta = inject(MareentaService );
  




  ngOnInit(): void {
      this.getLiiskaDiiwaanka();
  }

  getLiiskaDiiwaanka(){
    return this.mareenta.getDiiwaankoodhan().subscribe((Idiiwaanka)=> {
    this.Liiska= Idiiwaanka;
    console.table(this.Liiska)
    })
  }


}