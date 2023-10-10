import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isDarkMode = false;

  constructor(private settingsService: SettingsService) {}

  toggleDarkMode() {
    if (this.isDarkMode == true) {
      this.settingsService.setDarkMode(false);
      this.isDarkMode = false;
    } else {
      this.settingsService.setDarkMode(true);
      this.isDarkMode = true;
    }
  }
}
