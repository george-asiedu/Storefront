import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    applyLogin = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })

    validateForm() {
      this.applyLogin.value.email ?? '',
      this.applyLogin.value.password ?? ''
    }
}
