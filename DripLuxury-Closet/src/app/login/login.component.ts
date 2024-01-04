import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CarouselComponent } from '../carousel/carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CarouselComponent, FontAwesomeModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
    faUser = faUser
    faLock = faLock

    applyLogin = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })

    validateForm() {
      this.applyLogin.value.email ?? '',
      this.applyLogin.value.password ?? ''
    }
}