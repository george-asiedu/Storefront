import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CarouselComponent } from '../carousel/carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CarouselComponent, ReactiveFormsModule, RouterLink, FontAwesomeModule],
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  faUser = faUser
  faEnvelope = faEnvelope
  faLock = faLock
  
  applyLogin = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  validateForm() {
    this.applyLogin.value.email ?? '',
    this.applyLogin.value.password ?? ''
  }
}
