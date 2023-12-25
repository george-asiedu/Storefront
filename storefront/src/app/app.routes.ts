import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: NavbarComponent,
        title: 'Storefront'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Storefront - Login'
    }
];
