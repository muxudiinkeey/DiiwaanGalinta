import { Routes } from '@angular/router';
import { KudarDiiwaankaComponent } from './kudar-diiwaanka/kudar-diiwaanka.component';
import { LiiskaDiiwaankaComponent } from './liiska-diiwaanka/liiska-diiwaanka.component';
import { WaxkabadalDiiwaankaComponent } from './waxkabadal-diiwaanka/waxkabadal-diiwaanka.component';
import { ItusComponent } from './itus/itus.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'liikaDiiwaanka' },
    { path: 'liiskaDiiwaanka', component: LiiskaDiiwaankaComponent },
    { path: 'kudarDiiwaanka/:id', component:KudarDiiwaankaComponent },
    { path: 'itus/:id', component:ItusComponent },
    { path: 'waxkabadalDiiwaanka/:id', component: WaxkabadalDiiwaankaComponent},
    
];
