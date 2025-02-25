import { Component, inject } from '@angular/core';
import { diiwaanka } from '../diiwaanka';
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
diiwaanada : diiwaanka[]= []
  mareentaService = inject(MareentaService )

//diiwaanka: any;


  ngOnInit(): void {
      this.getLiiskaDiiwaanka();
  }

  getLiiskaDiiwaanka(){
    return this.mareentaService.getdiiwaanka().subscribe((diiwaanka)=> {
    this.diiwaanada= diiwaanka;
    })
  }

}
