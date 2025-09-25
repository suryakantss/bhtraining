import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductsComponent } from './features/products/products.component';
import { DetailsComponent } from './features/details/details.component';

export const routes: Routes = [
    {path:'',component:HomeComponent,title:'Home'},
    {path:'products',loadComponent:()=> import('./features/products/products.component').then(c=>c.ProductsComponent),title:'Products',children:[
        {path:'details/:id',component:DetailsComponent,title:'Details'}
    ]},

];
