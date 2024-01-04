import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

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
    }
];
