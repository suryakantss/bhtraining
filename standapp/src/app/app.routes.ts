import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductsComponent } from './features/products/products.component';
import { DetailsComponent } from './features/details/details.component';
import { authGuard } from './auth.guard';
import { unsavedGuard } from './unsaved.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home' },
    {
        path: 'products', canActivate: [authGuard], canDeactivate: [unsavedGuard], loadComponent: () => import('./features/products/products.component').then(c => c.ProductsComponent), title: 'Products', children: [
            { path: 'details/:id', component: DetailsComponent, title: 'Details' }
        ]
    },
    { path: 'blog', loadComponent: () => import('./features/blog/blog.component').then(c => c.BlogComponent), title: 'Blog', canActivate: [authGuard] },
    { path: 'signin', loadComponent: () => import('./features/sign-in/sign-in.component').then(c => c.SignInComponent), title: 'SignIn' },
    { path: 'signup', loadComponent: () => import('./features/sign-up/sign-up.component').then(c => c.SignupComponent), title: 'SignUp' },
    { path: 'calc', loadComponent: () => import('./features/calc/calc.component').then(c => c.CalcComponent), title: 'Calc' },
    { path: 'users', loadComponent: () => import('./features/users/users.component').then(c => c.UsersComponent), title: 'Users' },

];
