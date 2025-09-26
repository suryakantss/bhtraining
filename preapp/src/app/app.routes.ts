import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'',component:HomeComponent,title:'Home'},
    {path:'counter',loadComponent:()=>import('./counter/counter.component').then(c=>c.CounterComponent),title:'Counter'},
    {path:'calc',loadComponent:()=>import('./calc/calc.component').then(c=>c.CalcComponent),title:'Calc'},
    {path:'**',redirectTo:''}
];
