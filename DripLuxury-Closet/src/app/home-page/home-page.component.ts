import { Component } from '@angular/core';
import { HomeNavbarComponent } from '../home-navbar/home-navbar.component';
import { OffSalesComponent } from '../off-sales/off-sales.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeNavbarComponent, OffSalesComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
