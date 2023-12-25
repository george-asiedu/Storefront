import { Component } from '@angular/core';
import { CategoryNavbarComponent } from '../category-navbar/category-navbar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CategoryNavbarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
