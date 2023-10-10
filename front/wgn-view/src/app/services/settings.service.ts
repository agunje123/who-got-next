import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  darkModeSubject = new Subject<boolean>();

  setDarkMode(isDarkMode: boolean) {
    this.darkModeSubject.next(isDarkMode);
    localStorage.setItem('isDarkMode', isDarkMode.toString());
  }

  getDarkMode() {
    return JSON.parse(localStorage.getItem('isDarkMode') || '{}');
  }
}
