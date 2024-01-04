import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-navbar',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './home-navbar.component.html',
})
export class HomeNavbarComponent {
  faSearch = faSearch
  faBagshopping = faBagShopping
  faSignin = faSignIn
  faUserPlus = faUserPlus
}
