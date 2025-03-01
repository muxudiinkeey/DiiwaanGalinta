import { Component, inject } from '@angular/core';
import { Idiiwaanka } from '../diiwaanka';
import { MareentaService } from '../liiska-diiwaanka/mareenta.service';

@Component({
  selector: 'app-kudar-diiwaanka',
  imports: [],
  templateUrl: './kudar-diiwaanka.component.html',
  styleUrl: './kudar-diiwaanka.component.css'
})
export class KudarDiiwaankaComponent {
  pageTitle = 'Ku Dar   Diiwaanka'
 
 //diiwaanka =[];
diiwaanada : Idiiwaanka[]= []
  mareentaService = inject(MareentaService )

//diiwaanka: any;


  ngOnInit(): void {
      this.getLiiskaDiiwaanka();
  }

  getLiiskaDiiwaanka(){
    return this.mareentaService.getdiiwaankoodhan().subscribe((Idiiwaanka)=> {
    this.diiwaanada= Idiiwaanka;
    })
  }

}
