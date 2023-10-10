import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  darkModeOn: boolean = true;

  toggleDarkMode() {
    if (this.darkModeOn === true) {
      this.darkModeOn = false;
    } else {
      this.darkModeOn = true;
    }
  }
}
