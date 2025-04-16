import { Component, inject, OnInit } from '@angular/core';
import { Idiiwaanka } from '../diiwaanka';
import { Kudardiiwaanka } from './kudardiiwaanka';
import { MareentaService } from '../liiska-diiwaanka/mareenta.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-kudar-diiwaanka',
  imports: [ReactiveFormsModule],
  templateUrl: './kudar-diiwaanka.component.html',
  styleUrl: './kudar-diiwaanka.component.css'
})
export class KudarDiiwaankaComponent implements OnInit {
  
  diiwaanGali:FormGroup|any;
mareenta = inject(MareentaService);
router= inject(Router);
formbuilder= inject (FormBuilder)


ngOnInit(): void {
  this.diiwaanGali= this.formbuilder.group({
    id: new FormControl (''),
    summadda: new FormControl(''),
    magaca:new FormControl (''),
    adreeska:new FormControl (''),
    shaqada:new FormControl (''),
  })
}

diiwaanGaliFoomka(){
console.log(this.diiwaanGali.value);
this.diiwaanGali.reset();
this.router.navigate(['liiskaDiiwaanka'])
}

  kudarDiiwaanka(){
    this.router.navigateByUrl('liiskaDiiwaanka')
  }

xarayso(){
  
}
  


}
