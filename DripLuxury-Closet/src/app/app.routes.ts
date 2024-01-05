import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        title: 'DripLuxury - Login'
    },
    {
        path: 'signup',
        component: SignupComponent,
        title: 'DripLuxury - Signup'
    },
    {
        path: '',
        component: HomePageComponent,
        title: 'DripLuxury - Home - Page'
    }
];
