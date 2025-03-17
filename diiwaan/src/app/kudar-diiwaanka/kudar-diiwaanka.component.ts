import { Component, inject } from '@angular/core';
import { Idiiwaanka } from '../diiwaanka';
import { MareentaService } from '../liiska-diiwaanka/mareenta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kudar-diiwaanka',
  imports: [],
  templateUrl: './kudar-diiwaanka.component.html',
  styleUrl: './kudar-diiwaanka.component.css'
})
export class KudarDiiwaankaComponent {
  
mareenta = inject(MareentaService);
router= inject(Router);
  kudarDiiwaanka(){
    this.router.navigateByUrl('liiskaDiiwaanka')
  }
}
