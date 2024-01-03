import { Component } from '@angular/core';
import { CategoryNavbarComponent } from '../category-navbar/category-navbar.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CategoryNavbarComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
