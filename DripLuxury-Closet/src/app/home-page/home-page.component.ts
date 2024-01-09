import { Component } from '@angular/core';
import { HomeNavbarComponent } from '../home-navbar/home-navbar.component';
import { OffSalesComponent } from '../off-sales/off-sales.component';
import { NewArrivalsComponent } from '../new-arrivals/new-arrivals.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeNavbarComponent, OffSalesComponent, NewArrivalsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
