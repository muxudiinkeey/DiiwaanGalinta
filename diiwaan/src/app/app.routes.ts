import { Routes } from '@angular/router';
import { KudarDiiwaankaComponent } from './kudar-diiwaanka/kudar-diiwaanka.component';
import { LiiskaDiiwaankaComponent } from './liiska-diiwaanka/liiska-diiwaanka.component';
import { WaxkabadalDiiwaankaComponent } from './waxkabadal-diiwaanka/waxkabadal-diiwaanka.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'liikaDiiwaanka' },
    { path: 'liiskaDiiwaanka', component: LiiskaDiiwaankaComponent },
    { path: 'kudar', component:KudarDiiwaankaComponent },
    { path: 'waxkabalkaDiiwaanka', component: WaxkabadalDiiwaankaComponent},
    
];
