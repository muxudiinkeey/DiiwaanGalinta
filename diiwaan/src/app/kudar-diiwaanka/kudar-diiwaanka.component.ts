import { Component, inject, OnInit } from '@angular/core';
import { Idiiwaanka } from '../diiwaanka';
import { MareentaService } from '../liiska-diiwaanka/mareenta.service';
import { ActivatedRoute, Router } from '@angular/router';
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
activateRoute= inject(ActivatedRoute)
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

this.activateRoute.paramMap.subscribe(((params)=>{
  return this.activateRoute.params;
}))

}

  kudarDiiwaanka(){
    this.router.navigate(["/liiskaDiiwaanka"])
  }

xaraysoDiiwaanka(){

    console.log(this.diiwaanGali.value);
  }
    
  
}
  



