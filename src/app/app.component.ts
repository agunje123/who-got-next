import { Component, HostBinding, OnInit } from '@angular/core';
import { SettingsService } from './services/settings.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private settingsService: SettingsService,
    private breakpointService: BreakpointObserver
  ) {}

  isDarkMode: boolean = true;

  @HostBinding('class')
  get themeMode() {
    return this.isDarkMode ? 'theme-dark' : 'theme-light';
  }

  ngOnInit() {
    this.checkForDarkmode();
    this.checkForMobileView();
  }

  checkForMobileView() {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result) => {
        this.settingsService.mobileViewSubject.next(false);
        if (result.matches) {
          this.settingsService.mobileViewSubject.next(true);
        }
      });
  }

  checkForDarkmode() {
    let localStorageDarkMode = this.settingsService.getDarkMode();
    if (localStorageDarkMode == true || localStorageDarkMode == false) {
      this.settingsService.setDarkMode(localStorageDarkMode);
      this.isDarkMode = localStorageDarkMode;
    } else {
      this.settingsService.setDarkMode(false);
    }
    this.settingsService.darkModeSubject.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }
}
