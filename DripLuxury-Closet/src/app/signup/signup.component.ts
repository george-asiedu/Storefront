import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CarouselComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
})
export class SignupComponent {
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
